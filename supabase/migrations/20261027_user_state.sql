-- STYLE OS / Supabase SQL Editor / execute once in test project
create table if not exists public.user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint user_state_data_object check (jsonb_typeof(data) = 'object'),
  constraint user_state_payload_limit check (octet_length(data::text) <= 1000000)
);
alter table public.user_state enable row level security;
alter table public.user_state force row level security;
revoke all on public.user_state from anon;
grant select,insert,update,delete on public.user_state to authenticated;
drop policy if exists "owner read" on public.user_state;
drop policy if exists "owner insert" on public.user_state;
drop policy if exists "owner update" on public.user_state;
drop policy if exists "owner delete" on public.user_state;
create policy "owner read" on public.user_state for select to authenticated using ((select auth.uid()) = user_id);
create policy "owner insert" on public.user_state for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "owner update" on public.user_state for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner delete" on public.user_state for delete to authenticated using ((select auth.uid()) = user_id);
