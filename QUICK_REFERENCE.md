# PRISMATEK - QUICK REFERENCE

**Última Atualização:** 12 Janeiro 2026

---

## 📊 INFORMAÇÃO ESSENCIAL

### Branding
- **Nome:** PRISMATEK
- **Tagline:** Múltiplas Perspectivas sobre Tecnologia
- **Significado:** Prisma (múltiplas perspectivas) + TEK (tecnologia)
- **Cores:** Cyan (#06B6D4) + Navy (#1E293B)

### URLs
- **Site:** https://prismatek-pt.vercel.app
- **GitHub:** https://github.com/seth-dev-fs/PRISMATEK
- **Vercel:** https://vercel.com/dashboard

### Redes Sociais (Links configurados, perfis a criar)
- **Twitter:** @prismatek
- **Facebook:** /prismatek
- **LinkedIn:** /company/prismatek
- **YouTube:** /prismatek

---

## ⚙️ CONFIGURAÇÃO TÉCNICA

### Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **AI:** Google Gemini API (gemini-2.5-flash)

### Comandos Essenciais
```bash
# Dev
npm run dev                 # http://localhost:3000

# Build
npm run build              # Build para produção

# Content
npm run generate-articles  # Gerar artigos localmente

# Git
git push origin main       # Deploy automático no Vercel
```

### Variáveis de Ambiente (Vercel)
```bash
GEMINI_API_KEY=•••           # REQUIRED - Geração artigos
REVALIDATE_TOKEN=•••         # REQUIRED - ISR cache
UNSPLASH_ACCESS_KEY=•••      # OPTIONAL - Imagens fallback
NEXT_PUBLIC_GA_ID=G-XXX      # OPTIONAL - Analytics
```

---

## 📁 ESTRUTURA IMPORTANTE

```
PRISMATEK/
├── content/posts/           # Artigos markdown (1035+)
├── public/
│   ├── prismatek-*.svg     # Logos (4 versões)
│   └── images/
│       └── placeholder.svg # Fallback image
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # React components
│   └── lib/                # Utils (markdown, categories)
├── scripts/
│   └── generate-articles.js # Geração AI de artigos
└── .github/workflows/
    └── generate.yml        # Cron job (2h)
```

---

## 🔄 WORKFLOW AUTOMÁTICO

```
┌─────────────┐
│ GitHub      │
│ Action      │  Corre a cada 2 horas
│ (Cron: 2h)  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Fetch RSS   │  15+ tech news feeds
│ Feeds       │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Gemini API  │  Gera artigo em PT
│ Generate    │  400-500 palavras
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Commit      │  draft: true
│ to main     │  content/posts/*.md
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Vercel      │  Auto-deploy
│ Deploy      │  ~2-3 min
└─────────────┘
```

---

## 📝 PUBLICAR ARTIGO

1. Abre `content/posts/nome-do-artigo.md`
2. Muda `draft: true` → `draft: false`
3. Commit: `git add . && git commit -m "Publish article"`
4. Push: `git push origin main`
5. Aguarda deploy (~2 min)

---

## 🎨 ASSETS DO LOGO

| Ficheiro | Tamanho | Uso |
|----------|---------|-----|
| `prismatek-icon-only.svg` | 100x100 | Favicon, social |
| `prismatek-icon-dark.svg` | 100x100 | Dark mode |
| `prismatek-icon-mono.svg` | 100x100 | Print |
| `prismatek-logo-full.svg` | 240x60 | Header horizontal |
| `images/placeholder.svg` | 1200x630 | OG image, fallback |

**Documentação:** `public/LOGO_README.md`

---

## 🚨 TROUBLESHOOTING RÁPIDO

### Build falha
```bash
npm run lint        # Verificar erros
npm run build       # Ver erro específico
rm -rf .next        # Limpar cache
npm run build       # Rebuild
```

### Deploy falha no Vercel
1. Vercel Dashboard → Deployments
2. Ver logs de erro
3. Verificar variáveis ambiente
4. Redeploy manualmente

### Artigos não aparecem
- Verificar `draft: false` no frontmatter
- `getArticlesSortedByDate()` filtra drafts por defeito
- Cache: aguardar 60s (ISR revalidation)

---

## 📚 DOCUMENTAÇÃO COMPLETA

### Documentos Principais
1. **REBRANDING_FINAL_SUMMARY.md** - História completa do rebranding
2. **CLAUDE.md** - Guidelines técnicas para desenvolvimento
3. **README.md** - Introdução e setup
4. **public/LOGO_README.md** - Manual do logo

### Documentos Históricos (Referência)
- `REBRANDING_NEXORA_TO_PRISMATEK.md` - Fase 1
- `REBRANDING_FASE2_COMPLETO.md` - Fase 2
- `RELATORIO_PROJETO_NEXORA_NEWS.md` - Análise original

---

## ✅ CHECKLIST PRÉ-DEPLOY

Antes de fazer changes importantes:
- [ ] `npm run build` completa sem erros
- [ ] `npm run lint` sem warnings críticos
- [ ] Testar localmente (`npm run dev`)
- [ ] Commit com mensagem descritiva
- [ ] Push para main
- [ ] Verificar deploy no Vercel
- [ ] Testar site em produção

---

## 🔗 LINKS ÚTEIS

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/seth-dev-fs/PRISMATEK
- **Gemini API:** https://ai.google.dev/
- **Unsplash API:** https://unsplash.com/developers
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## 👥 CONTACTO

**Desenvolvedor:** Seth (FS Web Design)
**GitHub:** @seth-dev-fs
**Assistente:** Claude Sonnet 4.5

---

## 📊 ESTATÍSTICAS DO PROJETO

- **Artigos:** 1035+ (e a crescer a cada 2h)
- **Commits:** 160+
- **Tamanho:** ~500MB (com node_modules)
- **Build Time:** ~2-3 minutos
- **Deploy:** Automático (push to main)
- **Uptime:** 99.9% (Vercel SLA)

---

**PRISMATEK - Múltiplas Perspectivas sobre Tecnologia** 🚀

*Última atualização: 12 Janeiro 2026*
