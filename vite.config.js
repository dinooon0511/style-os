import { defineConfig } from 'vite';

// Apply outfit constraints to the legacy generator at build time until it is
// extracted into a dedicated React module. Fail the build if the hook moves.
function enforceOutfitRules() {
  return {
    name: 'style-os-outfit-rules',
    enforce: 'pre',
    transform(source, id) {
      if (!id.replaceAll('\\', '/').endsWith('/src/legacy/engine.js')) return null;
      const hook = 'if(!validLookLayers(parts))continue;';
      if (!source.includes(hook)) throw new Error('Outfit rules hook not found in legacy engine');
      const rules = `
        // Hard constraints: at most three distinct garment colors per outfit.
        const outfitColors = new Set(parts.map(p => String(p.color || '').toLowerCase()).filter(Boolean));
        if (outfitColors.size > 3) continue;

        // Sports trousers are strictly casual, not smart/classic clothing.
        const sportsBottom = parts.some(p =>
          p.type === 'joggers' ||
          /jogger|sweatpant|trackpant|sport/i.test(String(p.subtype || '')) ||
          /спортивн.*(брюк|штан)|джоггер/i.test(String(p.name || '').toLowerCase())
        );
        if (sportsBottom) {
          const incompatible = parts.some(p => {
            const name = String(p.name || '').toLowerCase();
            if (['coat','blazer','shirt','polo','knit','loafers','derby','chelsea'].includes(p.type)) return true;
            if (/пальто|тренч|водолазк|рубашк|кардиган|пиджак|джемпер|свитер|лофер|дерби|челси|поло/i.test(name)) return true;
            // Sports trousers pair with casual sneakers, not formal footwear.
            if ((typeof GROUP !== 'undefined' && GROUP[p.type] === 'shoes') &&
                !['sneakers'].includes(p.type)) return true;
            return false;
          });
          if (incompatible) continue;
        }
      `;
      const heart = '<svg viewBox="0 0 24 24" width="58" height="58" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/></svg>';
      return source.replace(hook, hook + rules)
        .replace('<span>♡</span>', '<span>' + heart + '</span>')
        .replace('>♡ НРАВИТСЯ</span>', '>' + heart + ' НРАВИТСЯ</span>');

    }
  };
}

export default defineConfig({
  // GitHub project pages are served under /style-os/, not at domain root.
  base: '/style-os/',
  plugins: [enforceOutfitRules()],
});
