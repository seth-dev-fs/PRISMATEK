# 📰 SISTEMA DE NOTÍCIAS - GUIDELINES DE ATUALIZAÇÃO

**Projeto:** PRISMATEK News System
**Data:** 12 Janeiro 2026
**Status:** PRONTO PARA IMPLEMENTAÇÃO
**Objetivo:** Remover fontes PT, adicionar fontes internacionais (FR, DE, IT, UK)

---

## 🎯 MUDANÇAS ESTRATÉGICAS

### **PORQUÊ?**

**Problema Atual:**
- Fontes portuguesas (Pplware, Tek, 4gnews) podem gerar acusações de cópia
- Risco de conflito com sites estabelecidos em Portugal
- Imagens e conteúdo muito similares aos originais

**Solução:**
- ✅ **Remover** todas as fontes portuguesas
- ✅ **Adicionar** fontes internacionais (FR, DE, IT, UK)
- ✅ **Traduzir** de línguas estrangeiras → PT-PT (mais transformativo)
- ✅ **Focar** em notícias tech globais adaptadas para audiência portuguesa

**Vantagem:**
- Conteúdo único para mercado PT
- Zero risco de acusações de cópia
- Diferencial competitivo: notícias europeias em PT-PT

---

## 🔧 ALTERAÇÕES TÉCNICAS

### 1. RSS Feeds - Remover Fontes PT

**Ficheiro:** `scripts/generate-articles.js`

**REMOVER (linhas 51-54):**
```javascript
// Portuguese Sources - PRIORITY (better PT context)
'https://pplware.sapo.pt/feed/',
'https://tek.sapo.pt/feed',
'https://4gnews.pt/feed/',
```

**RESULTADO:** 15 feeds internacionais (EN) mantidos:
- Ars Technica, The Verge, TechCrunch, Engadget
- PhoneArena, Android Authority, 9to5Mac, SamMobile
- TechRadar, 9to5Linux, It's FOSS, OMG Ubuntu
- GSM Arena, Xataka (ES), Notebookcheck

---

### 2. RSS Feeds - Adicionar Fontes Internacionais

**ADICIONAR (após linha 49):**

```javascript
const RSS_FEEDS = [
    // === INTERNATIONAL SOURCES (EN) ===
    'http://feeds.arstechnica.com/arstechnica/gadgets',
    'https://www.theverge.com/rss/index.xml',
    'https://techcrunch.com/feed/',
    'https://www.engadget.com/rss.xml',
    'https://www.phonearena.com/feed',
    'https://www.androidauthority.com/feed/',
    'https://9to5mac.com/feed/',
    'https://www.sammobile.com/feed/',
    'https://www.techradar.com/rss',
    'https://9to5linux.com/feed/',
    'https://itsfoss.com/feed/',
    'https://www.omgubuntu.co.uk/feed',
    'https://www.gsmarena.com/rss-news-reviews.php3',
    'https://www.xataka.com/feedburner.xml', // Spanish
    'https://www.notebookcheck.net/News.152.100.html',

    // === FRANCE (FR) ===
    'https://www.frandroid.com/feed',                  // Android/smartphones
    'https://www.clubic.com/feed/',                    // Tech geral
    'https://www.lesnumeriques.com/rss.xml',           // Reviews tech
    'https://www.journaldugeek.com/feed/',             // Tech + cultura geek
    'https://www.01net.com/rss/actualites/',           // Notícias tech

    // === GERMANY (DE) ===
    'https://www.heise.de/rss/heise-atom.xml',         // Tech news
    'https://www.golem.de/rss.php?feed=ATOM1.0',       // IT news
    'https://t3n.de/feed/',                             // Digital pioneers
    'https://www.computerbase.de/rss/news.xml',        // Hardware + software

    // === ITALY (IT) ===
    'https://www.tomshw.it/feed/',                     // Tom's Hardware IT
    'https://www.hdblog.it/feed/',                     // Tech + smartphones
    'https://www.hwupgrade.it/rss/hwupgrade.xml',      // Hardware news
    'https://www.androidworld.it/feed/',               // Android IT

    // === UK (EN - perspectiva europeia) ===
    'https://www.trustedreviews.com/feed',             // Reviews
    'https://www.pocket-lint.com/feed/',               // Consumer tech
    'https://www.t3.com/feeds/all',                    // Gadgets + lifestyle
    'https://www.stuff.tv/feed',                       // Tech + gadgets
    'https://www.expertreviews.co.uk/feed',            // Expert reviews
];
```

**Total:** ~34 feeds (15 EN + 5 FR + 4 DE + 4 IT + 6 UK)

---

### 3. Atualizar Prompt do Gemini

**Ficheiro:** `scripts/generate-articles.js`

**ENCONTRAR** (aprox. linha 200-250):
```javascript
const prompt = `
You are PRISMATEK, a leading European technology news platform.
Generate a Portuguese (PT-PT) article...
`;
```

**ATUALIZAR PARA:**
```javascript
const prompt = `
You are PRISMATEK, a leading European technology news platform focused on bringing international tech news to Portuguese-speaking audiences.

IMPORTANT CONTEXT:
- Source article is in ${detectedLanguage} (English, French, German, Italian, or Spanish)
- You are TRANSLATING and ADAPTING for Portuguese (PT-PT) readers
- Focus on European perspective (not USA-centric)
- Adapt prices, availability, dates to European/Portuguese context

TASK:
Transform the following ${detectedLanguage} tech article into Portuguese (PT-PT):

Title: ${item.title}
Content: ${cleanContent}
Source URL: ${item.link}

GUIDELINES:
1. Language: European Portuguese (PT-PT), NOT Brazilian Portuguese
2. Length: 400-500 words, conversational and informative
3. Tone: Professional but approachable, tech-savvy audience
4. Perspective: Adapt for European/Portuguese readers (convert prices if mentioned, adjust cultural references)
5. Structure:
   - Engaging introduction (hook the reader)
   - Main content (technical details, implications)
   - Conclusion (what it means for users)
6. Categories: Choose ONE from [${NORMALIZED_CATEGORIES.join(', ')}]
7. SEO: Natural keyword integration without keyword stuffing
8. Avoid: Promotional language, direct quotes from source (rephrase), exact translations (be creative)
9. Images: Do NOT include image URLs in the article text
10. Prices: Convert to EUR if needed (approximate), use € symbol

CRITICAL: This is NOT a translation - it's an ADAPTATION. Add context for PT readers, explain acronyms, make it feel like original PRISMATEK content.

Return ONLY valid JSON:
{
  "title": "Engaging Portuguese title (max 100 chars)",
  "category": "one-slug-from-list",
  "description": "Brief summary in PT-PT (max 160 chars)",
  "content": "Full article in markdown format (400-500 words)",
  "imageQuery": "specific search term for Unsplash (in English, 2-3 words)"
}
`;
```

**Novas Variáveis Necessárias:**
```javascript
// Detect source language (antes do prompt)
const detectedLanguage = detectLanguage(item.link);

function detectLanguage(url) {
  if (url.includes('.fr') || url.includes('frandroid') || url.includes('clubic') || url.includes('lesnumeriques')) return 'French';
  if (url.includes('.de') || url.includes('heise') || url.includes('golem')) return 'German';
  if (url.includes('.it') || url.includes('tomshw') || url.includes('hdblog')) return 'Italian';
  if (url.includes('.es') || url.includes('xataka')) return 'Spanish';
  return 'English';
}
```

---

### 4. Filtros de Conteúdo Promocional

**OBJETIVO:** Evitar artigos promocionais/advertoriais que não agregam valor.

**ADICIONAR** (após função `jaccardIndex`, aprox linha 120):

```javascript
/**
 * Detecta se artigo é promocional/spam
 */
function isPromotionalContent(title, content) {
  const promotionalKeywords = [
    'sponsored', 'parceria', 'publicidade', 'anúncio',
    'compre agora', 'oferta exclusiva', 'desconto especial',
    'affiliate', 'código promocional', 'cupom',
    'black friday deals', 'best price', 'buy now'
  ];

  const combinedText = `${title} ${content}`.toLowerCase();

  // Se mais de 2 keywords promocionais → skip
  const matchCount = promotionalKeywords.filter(kw => combinedText.includes(kw)).length;

  return matchCount >= 2;
}

/**
 * Valida se artigo tem conteúdo suficiente
 */
function hasMinimumContent(content) {
  const wordCount = content.split(/\s+/).length;
  return wordCount >= 50; // Mínimo 50 palavras
}
```

**USAR** (dentro do loop de processamento de artigos):
```javascript
// Skip promotional content
if (isPromotionalContent(item.title, cleanContent)) {
  log(`⚠️  SKIP: Promotional content detected - ${item.title}`);
  skippedPromo++;
  continue;
}

// Skip if insufficient content
if (!hasMinimumContent(cleanContent)) {
  log(`⚠️  SKIP: Insufficient content - ${item.title}`);
  skippedShort++;
  continue;
}
```

---

### 5. Gestão de Imagens

**ATUALIZAR** (função `searchUnsplashImage`, aprox linha 150):

```javascript
async function searchUnsplashImage(query, category) {
  if (!UNSPLASH_ACCESS_KEY) {
    log("⚠️  UNSPLASH_ACCESS_KEY not set, using placeholder");
    return 'https://prismatek-pt.vercel.app/images/placeholder.svg';
  }

  try {
    const searchQuery = query || getCategoryDefaultQuery(category);

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: searchQuery,
        per_page: 1,
        orientation: 'landscape',
        content_filter: 'high', // Avoid sensitive content
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      const photo = response.data.results[0];
      return `${photo.urls.regular}&w=1200&h=630&fit=crop`; // Optimized size
    }

    log(`⚠️  No Unsplash image found for query: ${searchQuery}`);
    return 'https://prismatek-pt.vercel.app/images/placeholder.svg';
  } catch (error) {
    log(`❌ Unsplash API error: ${error.message}`);
    return 'https://prismatek-pt.vercel.app/images/placeholder.svg';
  }
}

/**
 * Default image queries por categoria
 */
function getCategoryDefaultQuery(category) {
  const defaults = {
    'smartphones': 'smartphone technology',
    'ai-futuro': 'artificial intelligence',
    'computadores': 'computer technology',
    'gaming': 'gaming setup',
    'audio': 'headphones audio',
    'wearables': 'smartwatch wearable',
    'mobilidade': 'electric vehicle',
    'entretenimento-gaming': 'gaming entertainment',
    'internet-apps': 'mobile apps',
    'ciencia': 'science technology',
    'home': 'smart home'
  };

  return defaults[category] || 'technology';
}
```

---

## 📊 IMPACTO ESPERADO

### **Antes (Com fontes PT):**
```
RSS Feeds: 18 (15 EN + 3 PT)
Artigos/dia: ~30-40
Risco cópia: ALTO (sites PT reclamarem)
Diferenciação: BAIXA (mesmas notícias que Pplware/4gnews)
```

### **Depois (Só fontes internacionais):**
```
RSS Feeds: ~34 (15 EN + 5 FR + 4 DE + 4 IT + 6 UK)
Artigos/dia: ~50-70 (mais feeds)
Risco cópia: ZERO (tradução/adaptação de fontes estrangeiras)
Diferenciação: ALTA (único site PT com notícias FR/DE/IT em PT-PT)
```

### **Vantagens Competitivas:**
- ✅ Conteúdo único (traduzido de fontes europeias)
- ✅ Zero conflito com sites portugueses
- ✅ Perspectiva europeia (não USA-centric)
- ✅ Maior volume de conteúdo (34 feeds vs 18)
- ✅ SEO: palavras-chave PT para notícias europeias
- ✅ Nicho: "Tech europeia em português"

---

## 🛠️ IMPLEMENTAÇÃO

### **Passo 1: Atualizar RSS Feeds**

```bash
# Editar scripts/generate-articles.js
# Remover linhas 51-54 (fontes PT)
# Adicionar feeds FR, DE, IT, UK (ver secção 2 acima)
```

### **Passo 2: Adicionar Função `detectLanguage`**

```javascript
// Adicionar após linha 96 (CATEGORY_MAP)
function detectLanguage(url) {
  if (url.includes('.fr') || url.includes('frandroid') || url.includes('clubic') || url.includes('lesnumeriques') || url.includes('journaldugeek') || url.includes('01net')) {
    return 'French';
  }
  if (url.includes('.de') || url.includes('heise') || url.includes('golem') || url.includes('t3n') || url.includes('computerbase')) {
    return 'German';
  }
  if (url.includes('.it') || url.includes('tomshw') || url.includes('hdblog') || url.includes('hwupgrade') || url.includes('androidworld')) {
    return 'Italian';
  }
  if (url.includes('.es') || url.includes('xataka')) {
    return 'Spanish';
  }
  return 'English';
}
```

### **Passo 3: Atualizar Prompt Gemini**

```javascript
// Substituir prompt existente (aprox. linha 200-250) pelo novo prompt da secção 3
// IMPORTANTE: Usar template string e incluir ${detectedLanguage}
```

### **Passo 4: Adicionar Filtros Promocionais**

```javascript
// Adicionar funções isPromotionalContent e hasMinimumContent (secção 4)
// Aplicar filtros no loop principal de processamento
```

### **Passo 5: Melhorar Gestão de Imagens**

```javascript
// Atualizar função searchUnsplashImage (secção 5)
// Adicionar getCategoryDefaultQuery
```

### **Passo 6: Testar Localmente**

```bash
# Testar geração com novos feeds
npm run generate-articles

# Verificar:
# - Artigos gerados em PT-PT (não PT-BR)
# - Sem artigos promocionais
# - Imagens Unsplash relevantes
# - Categorias corretas
# - Conteúdo 400-500 palavras
```

### **Passo 7: Atualizar Domínios de Imagem**

**Ficheiro:** `next.config.js`

**ADICIONAR** (se necessário novos domínios de imagens dos feeds FR/DE/IT/UK):

```javascript
// next.config.js - remotePatterns
{
  protocol: 'https',
  hostname: 'frandroid.com',
},
{
  protocol: 'https',
  hostname: 'clubic.com',
},
{
  protocol: 'https',
  hostname: 'lesnumeriques.com',
},
// ... adicionar conforme necessário após testar feeds
```

**NOTA:** Provavelmente não será necessário porque vamos usar Unsplash para todas as imagens.

### **Passo 8: Deploy & Monitorização**

```bash
# Commit changes
git add scripts/generate-articles.js
git commit -m "feat: Remove PT sources, add FR/DE/IT/UK international feeds

- Remove Pplware, Tek, 4gnews to avoid copyright issues
- Add 19 new international sources (FR, DE, IT, UK)
- Update Gemini prompt to handle multi-language translation
- Add promotional content filters
- Improve image handling with category defaults

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

git push origin main

# Monitorizar GitHub Action (próxima execução automática em 2h)
# Ou executar manualmente:
gh workflow run "Generate PRISMATEK Articles"
```

### **Passo 9: Validação Pós-Deploy**

**Checklist:**
- [ ] GitHub Action executou sem erros
- [ ] Novos artigos criados de feeds FR/DE/IT/UK
- [ ] Artigos em PT-PT (não PT-BR)
- [ ] Zero artigos de fontes portuguesas
- [ ] Imagens Unsplash funcionam
- [ ] Categorias atribuídas corretamente
- [ ] Conteúdo transformado (não tradução literal)
- [ ] Preços em EUR quando mencionados
- [ ] Perspectiva europeia mantida

---

## 📋 CATEGORIAS - MAPEAMENTO

**Sem mudanças nas categorias existentes:**
```javascript
const NORMALIZED_CATEGORIES = [
    'ai-futuro',              // AI, machine learning, future tech
    'audio',                  // Headphones, speakers, audio tech
    'ciencia',                // Science, research, breakthroughs
    'computadores',           // PCs, laptops, hardware
    'entretenimento-gaming',  // Gaming + entertainment
    'gaming',                 // Pure gaming (consoles, games)
    'internet-apps',          // Web, apps, software
    'mobilidade',             // EVs, transport, mobility
    'smartphones',            // Phones, mobile devices
    'wearables',              // Smartwatches, fitness trackers
    'home'                    // Smart home, IoT
];
```

**IMPORTANTE:** Gemini vai precisar mapear termos em FR/DE/IT para estas categorias PT.

---

## 🎯 QUALIDADE DO CONTEÚDO

### **Antes (Fontes PT):**
```
Título EN: "Google Pixel 9 Pro Review: The Best Camera Phone"
Fonte: The Verge

Resultado: Artigo PT similar a Pplware/4gnews (mesma fonte original)
Risco: "Vocês copiaram nosso artigo!"
```

### **Depois (Fontes FR/DE/IT):**
```
Título FR: "Google Pixel 9 Pro : Le meilleur appareil photo de 2025"
Fonte: Frandroid.com

Resultado: Artigo PT ÚNICO, adaptado de perspectiva francesa
Risco: ZERO (nenhum site PT cobre Frandroid)
Valor: Conteúdo exclusivo para leitores PT
```

---

## 🚨 AVISOS IMPORTANTES

### **1. Qualidade da Tradução**
- Gemini 2.5 Flash é excelente para EN → PT
- FR/DE/IT → PT pode ter qualidade ligeiramente inferior
- **Solução:** Ativar agente **Marta** (content-qa) para validar primeiros artigos de fontes novas

### **2. Volume de Artigos**
- 34 feeds podem gerar 70-100 artigos/dia (vs 30-40 atual)
- **Solução:** Manter limite de 20-30 artigos/execução (já existe no script)

### **3. Custos Gemini API**
- Mais artigos = mais chamadas API
- **Solução:**
  - Monitorizar custos (devem manter-se baixos com Flash)
  - Limite já existe no script (MAX_ARTICLES)

### **4. Duplicados Cross-Language**
- Mesma notícia pode aparecer em EN + FR + DE
- **Solução:** Algoritmo Jaccard já filtra duplicados (verificar se funciona cross-language)

---

## 📊 MONITORING & ANALYTICS

### **KPIs a Monitorizar:**

**Antes da mudança (baseline):**
- Artigos/dia: X
- Categorias mais comuns: Y
- Fontes: 60% EN, 40% PT

**Após mudança (target):**
- Artigos/dia: +30-40%
- Categorias mais comuns: (manter diversidade)
- Fontes: 44% EN, 15% FR, 12% DE, 12% IT, 17% UK
- Qualidade (Marta validation): >90% aprovação
- Duplicados: <5%
- Artigos promocionais filtrados: tracking

### **Ativar Agente Marta (content-qa):**
```bash
# Após primeira execução com novos feeds, ativar Marta:
# 1. Ler .claude/agents/prismatek-team/content-qa.md
# 2. Pedir análise de primeiros 20 artigos de fontes FR/DE/IT
# 3. Validar qualidade PT-PT
# 4. Ajustar prompt Gemini se necessário
```

---

## ✅ CHECKLIST FINAL

### **Pré-Implementação:**
- [ ] Ler este documento completo
- [ ] Backup do ficheiro `scripts/generate-articles.js` atual
- [ ] Confirmar que `GEMINI_API_KEY` está configurada
- [ ] Confirmar que `UNSPLASH_ACCESS_KEY` está configurada

### **Implementação:**
- [ ] Remover feeds PT (linhas 51-54)
- [ ] Adicionar feeds FR/DE/IT/UK
- [ ] Adicionar função `detectLanguage`
- [ ] Atualizar prompt Gemini
- [ ] Adicionar filtros promocionais
- [ ] Atualizar gestão de imagens
- [ ] Testar localmente (`npm run generate-articles`)

### **Deploy:**
- [ ] Commit + push alterações
- [ ] Executar GitHub Action manualmente (primeira vez)
- [ ] Verificar logs de execução
- [ ] Validar artigos gerados

### **Pós-Deploy:**
- [ ] Ativar agente Marta para validação
- [ ] Monitorizar custos Gemini API (primeira semana)
- [ ] Verificar duplicados cross-language
- [ ] Ajustar filtros se necessário
- [ ] Documentar resultados

---

## 🎯 RESULTADO ESPERADO

**PRISMATEK torna-se o único site português a oferecer:**
- Notícias tech europeias (FR, DE, IT, UK) em português
- Perspectiva verdadeiramente europeia (não USA-only)
- Conteúdo exclusivo (zero overlap com Pplware/4gnews/Tek)
- Volume superior de artigos
- Zero risco legal/ético

**Posicionamento:**
> "PRISMATEK - A tua janela para a tecnologia europeia, em português."

---

**Status:** ✅ GUIDELINES COMPLETAS E PRONTAS PARA IMPLEMENTAÇÃO

**Criado por:** Seth + Claude Sonnet 4.5
**Data:** 12 Janeiro 2026
**Versão:** 1.0 FINAL

---

*PRISMATEK - Múltiplas Perspectivas sobre Tecnologia* 🌍✨
