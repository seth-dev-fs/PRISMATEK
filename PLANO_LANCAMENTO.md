# 🚀 PLANO DE LANÇAMENTO PRISMATEK

**Data:** 14 Janeiro 2026
**Orçamento Total:** 50€/mês
**Orçamento Disponível:** 27€/mês (50€ - 23€ Claude Code)

---

## 💰 ORÇAMENTO FINAL CALCULADO

| Item | Custo Mensal | Custo Anual | Notas |
|------|--------------|-------------|-------|
| **Claude Code** | 23€ | 276€ | ✅ Já pago |
| **Domínio prismatek.pt** | ~1€ | ~12€ | Via DonDominio ou similar |
| **Hosting Vercel** | 0€ (FREE) | 0€ | Hobby plan suficiente |
| **Email Zoho Mail** | 0€ (FREE) | 0€ | Até 5 utilizadores |
| **Gemini 3 Flash API** | 0€ (FREE tier) | 0€ | 3 artigos/dia cabe no free |
| **Redes Sociais** | 0€ (FREE) | 0€ | Converter contas existentes |
| **TOTAL MENSAL** | **24€** | **288€** | 26€/mês de margem! |

✅ **FOLGA NO ORÇAMENTO:** 26€/mês disponíveis para emergências/upgrades

---

## 📋 PLANO PASSO A PASSO

### **FASE 1: INFRAESTRUTURA BASE** (1-2 horas)

#### ✅ **PASSO 1: Registar Domínio prismatek.pt**

**Onde:** [DonDominio](https://www.dondominio.com/en/products/domains/pt/) ou [EuroDNS](https://www.eurodns.com/domain-extensions/pt-domain-registration)

**Custo:** ~10-15€/ano (1-1.25€/mês)

**Ações:**
1. Ir a DonDominio ou EuroDNS
2. Pesquisar "prismatek.pt"
3. Adicionar ao carrinho
4. Pagar com cartão (12-15€/ano)
5. **IMPORTANTE:** Guardar credenciais DNS

**Nameservers para Vercel:**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

---

#### ✅ **PASSO 2: Email Profissional GRÁTIS**

**Opção Recomendada:** [Zoho Mail](https://www.zoho.com/mail/) - 100% GRÁTIS até 5 users

**Setup:**
1. Criar conta em zoho.com/mail
2. Adicionar domínio personalizado: prismatek.pt
3. Criar emails:
   - `contato@prismatek.pt` (principal)
   - `noticias@prismatek.pt`
   - `suporte@prismatek.pt`
4. Configurar registos DNS (Zoho fornece):
   ```
   MX Record: mx.zoho.com (priority 10)
   TXT Record: v=spf1 include:zoho.com ~all
   DKIM: (Zoho fornece chave específica)
   ```

**Alternativa Paga:** [Openprovider](https://www.openprovider.com/blog/cheap-email-hosting-providers) - €0.70/user/mês

---

#### ✅ **PASSO 3: Gemini 3 Flash API Key**

**Modelo:** `gemini-3-flash-preview` (o mais recente!)

**Pricing:**
- **FREE Tier:** Ilimitado para uso leve
- **Paid:** $0.50 input / $3.00 output por 1M tokens
- **Rate Limit FREE:** 15 RPM (requests per minute)

**Com 3 artigos/dia:**
- 3 artigos × 30 dias = 90 artigos/mês
- Estimativa: ~500 tokens input + ~800 tokens output por artigo
- Total mensal: ~117K tokens (MUITO abaixo de 1M) ✅ **FREE TIER SUFICIENTE!**

**Setup:**
1. Ir a [Google AI Studio](https://aistudio.google.com/)
2. Criar API key
3. Guardar chave em `.env.local`:
   ```bash
   GEMINI_API_KEY=AIzaSy...
   ```

**Atualizar modelo no código:**
```javascript
// scripts/generate-articles.js
const model = genAI.getGenerativeModel({
  model: 'gemini-3-flash-preview'  // ← Atualizar para Gemini 3!
});
```

---

### **FASE 2: DEPLOYMENT** (30 min)

#### ✅ **PASSO 4: Deploy Vercel + Domínio**

**Hosting:** [Vercel](https://vercel.com) - Plan Hobby (FREE)

**Limites FREE Plan:**
- 100GB bandwidth/mês (suficiente para 10K+ visitantes)
- 100 builds/mês
- Unlimited deployments

**Setup:**
1. Conectar GitHub repo a Vercel (já feito!)
2. Ir a Vercel Dashboard → Settings → Domains
3. Adicionar domínio personalizado:
   ```
   prismatek.pt
   www.prismatek.pt
   ```
4. Copiar nameservers Vercel:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
5. Ir ao registar domínio (DonDominio)
6. Atualizar nameservers para Vercel
7. Aguardar propagação DNS (5min - 48h, normalmente <1h)

**Environment Variables Vercel:**
```bash
GEMINI_API_KEY=AIzaSy...
NEXT_PUBLIC_VERCEL_URL=https://prismatek.pt
REVALIDATE_TOKEN=<random_string>
```

---

### **FASE 3: BRANDING** (2-3 horas)

#### ✅ **PASSO 5: Converter Redes Sociais FS WEB DESIGN → PRISMATEK**

**Redes Existentes FS WEB DESIGN:**

**🔵 Facebook:**
1. Ir a facebook.com/fswebdesign (página)
2. Settings → Page Info → Name
3. Alterar para "PRISMATEK"
4. Username: facebook.com/prismatek
5. Atualizar:
   - Logo: Purple/Gold PRISMATEK
   - Cover: Banner PRISMATEK
   - About: "Múltiplas Perspectivas sobre Tecnologia"
   - Website: https://prismatek.pt

**🐦 Twitter/X:**
1. Settings → Your Account → Account Information
2. Username: @prismatek
3. Display name: "PRISMATEK"
4. Atualizar bio, foto, header

**📷 Instagram:**
1. Edit Profile → Username → @prismatek
2. Name: "PRISMATEK"
3. Bio: "🔮 Múltiplas Perspectivas sobre Tecnologia | 🇵🇹 Portugal"
4. Website: prismatek.pt

**💼 LinkedIn:**
1. Company Page Settings → Edit page info
2. Name: "PRISMATEK"
3. Tagline: "Múltiplas Perspectivas sobre Tecnologia"
4. Website: prismatek.pt

**🎨 Design Assets Necessários:**
- Logo PRISMATEK (já tens no código!)
- Banner redes sociais: 1500×500px
- Avatar: 400×400px
- OG Image: 1200×630px

---

### **FASE 4: CÓDIGO** (15 min)

#### ✅ **PASSO 6: Atualizar Código para Gemini 3 Flash**

**Ficheiro:** `scripts/generate-articles.js`

**Mudanças Necessárias:**

```javascript
// Linha ~50
const model = genAI.getGenerativeModel({
  model: 'gemini-3-flash-preview'  // ← ERA: 'gemini-2.5-flash'
});
```

**Testar localmente:**
```bash
npm run generate-articles
```

**Commit & Deploy:**
```bash
git add scripts/generate-articles.js
git commit -m "feat: Upgrade to Gemini 3 Flash (latest model)"
git push origin main
```

---

## 🎯 CHECKLIST FINAL PRÉ-LANÇAMENTO

### **Infraestrutura:**
- [ ] Domínio prismatek.pt registado
- [ ] DNS apontado para Vercel
- [ ] Email contato@prismatek.pt funcional
- [ ] Gemini 3 Flash API key ativa
- [ ] Vercel deployment com domínio custom

### **Código:**
- [ ] Gemini 3 Flash integrado
- [ ] Build sem erros (0 warnings)
- [ ] 1078 páginas geradas
- [ ] Light/Dark mode perfeitos
- [ ] Mobile/Desktop/Tablet responsivos

### **Branding:**
- [ ] Facebook → PRISMATEK
- [ ] Twitter → @prismatek
- [ ] Instagram → @prismatek
- [ ] LinkedIn → PRISMATEK
- [ ] Logo + banners atualizados

### **Content:**
- [ ] GitHub Actions a gerar artigos (3/dia)
- [ ] Artigos em português perfeito
- [ ] Imagens sem watermarks
- [ ] SEO optimizado

---

## 📊 MÉTRICAS DE SUCESSO (Primeiros 30 dias)

**Objetivos:**
- ✅ 1.000+ visitantes únicos
- ✅ 90 artigos publicados (3/dia)
- ✅ 0€ custos API (free tier)
- ✅ 100% uptime Vercel
- ✅ <2s page load time

---

## 🆘 PLANO B - Se Exceder FREE Tier

**Se Gemini 3 Flash custar >0€/mês:**

**Opção 1:** Downgrade para Gemini 2.0 Flash
- 5× mais barato ($0.10/$0.40 vs $0.50/$3.00)
- Ainda excelente qualidade

**Opção 2:** Reduzir artigos de 3→2 por dia
- 60 artigos/mês (ainda muito conteúdo!)
- Garante free tier

**Opção 3:** Usar o budget extra (26€/mês disponíveis)
- Mesmo com 90 artigos/mês, custo estimado <5€

---

## 🚀 TIMELINE LANÇAMENTO

| Fase | Tempo Estimado | Quando |
|------|----------------|--------|
| Registar domínio | 15 min | AGORA |
| Setup email Zoho | 30 min | AGORA |
| Gemini 3 API key | 5 min | AGORA |
| Deploy Vercel + DNS | 30 min | Depois DNS |
| Converter redes sociais | 2-3 horas | Próximos dias |
| Update código Gemini 3 | 15 min | AGORA |
| **TOTAL** | **4-5 horas** | **Hoje + próximos dias** |

---

## 📞 CONTACTOS PÓS-LANÇAMENTO

**Email Principal:** contato@prismatek.pt
**Website:** https://prismatek.pt
**GitHub:** https://github.com/seth-dev-fs/PRISMATEK

---

## ✅ PRÓXIMOS PASSOS IMEDIATOS

1. ✅ **AGORA:** Registar prismatek.pt
2. ✅ **AGORA:** Criar conta Zoho Mail
3. ✅ **AGORA:** Obter Gemini 3 Flash API key
4. ⏳ **Aguardar:** DNS propagation (1-48h)
5. ✅ **Deploy:** Vercel com domínio custom
6. 📱 **Converter:** Redes sociais FS → PRISMATEK

---

**BORA LANÇAR A PRISMATEK! 🚀🔮**
