-- STYLE OS: section-based, optimistic, non-destructive storage.
-- Run in the SQL Editor of the Supabase project used by the app BEFORE publishing the new frontend.
-- Existing public.user_state records are preserved for rollback.
create table if not exists public.user_state_sections (
  user_id uuid not null references auth.users(id) on delete cascade,
  section text not null check (section in ('profile','wardrobe','savedLooks','savedLookDetails','wish','feedback','daily','onboarded','city','forecast')),
  data jsonb not null,
  version bigint not null default 1 check (version >= 1),
  updated_at timestamptz not null default now(),
  primary key (user_id,section)
);
alter table public.user_state_sections enable row level security;
grant select,insert,update on public.user_state_sections to authenticated;
drop policy if exists "Owner reads own sections" on public.user_state_sections;
create policy "Owner reads own sections" on public.user_state_sections for select to authenticated using ((select auth.uid())=user_id);
drop policy if exists "Owner creates own sections" on public.user_state_sections;
create policy "Owner creates own sections" on public.user_state_sections for insert to authenticated with check ((select auth.uid())=user_id);
drop policy if exists "Owner updates own sections" on public.user_state_sections;
create policy "Owner updates own sections" on public.user_state_sections for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);

-- Backfill safely: do not overwrite sections that have already been migrated or edited.
insert into public.user_state_sections(user_id,section,data,version)
select us.user_id,kv.key,kv.value,1
from public.user_state us
cross join lateral jsonb_each(coalesce(us.data::jsonb,'{}'::jsonb)) as kv
where kv.key in ('profile','wardrobe','savedLooks','savedLookDetails','wish','feedback','daily','onboarded','city','forecast')
on conflict (user_id,section) do nothing;

create or replace function public.styleos_save_section(
  p_section text,
  p_data jsonb,
  p_expected_version bigint
) returns jsonb language plpgsql security invoker set search_path='' as $$
declare result_version bigint;
begin
  if (select auth.uid()) is null then raise exception 'Authentication required'; end if;
  if p_section not in ('profile','wardrobe','savedLooks','savedLookDetails','wish','feedback','daily','onboarded','city','forecast')
    then raise exception 'Unknown section'; end if;
  if p_expected_version = 0 then
    insert into public.user_state_sections(user_id,section,data,version,updated_at)
    values ((select auth.uid()),p_section,p_data,1,now())
    on conflict (user_id,section) do nothing
    returning version into result_version;
  elsif p_expected_version > 0 then
    update public.user_state_sections
       set data=p_data, version=version+1, updated_at=now()
     where user_id=(select auth.uid()) and section=p_section and version=p_expected_version
    returning version into result_version;
  end if;
  if result_version is null then
    select version into result_version from public.user_state_sections
     where user_id=(select auth.uid()) and section=p_section;
    return jsonb_build_object('ok',false,'version',result_version,'conflict',true);
  end if;
  return jsonb_build_object('ok',true,'version',result_version);
end $$;
revoke all on function public.styleos_save_section(text,jsonb,bigint) from public,anon;
grant execute on function public.styleos_save_section(text,jsonb,bigint) to authenticated;

-- Validation after applying:
-- select section,count(*) from public.user_state_sections group by section order by section;
