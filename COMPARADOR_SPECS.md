# 🏆 PRISMATEK COMPARADOR - ESPECIFICAÇÕES TÉCNICAS TOP

**Objetivo:** Criar o MELHOR comparador "bang for buck" de tech em Portugal
**Status:** Especificações Finais Aprovadas
**Data:** 12 Janeiro 2026

---

## 🎯 VISÃO: COMPARADOR WOW, INCRÍVEL, PERFEITO

**Diferencial Competitivo:**
- ✅ **IA Inteligente** (Gemini 2.5/2.0 Flash) - Não são tabelas de specs
- ✅ **Bang for Buck** - Foco em melhor relação qualidade/preço
- ✅ **Conversacional** - 4-5 perguntas simples → Recomendação perfeita
- ✅ **Faixas de Preço** - Sem scraping diário, faixas realistas (€300-400, €500-600)
- ✅ **Monetização Imediata** - Links de afiliados integrados
- ✅ **Mobile-First** - Interface linda e rápida
- ✅ **Português de Portugal** - Tom natural, não robótico

---

## 🌟 EXPERIÊNCIA DE UTILIZADOR

### **Landing Page do Comparador**

```
┌─────────────────────────────────────────────┐
│                                             │
│          🔍 COMPARADOR INTELIGENTE         │
│                                             │
│   Encontra o melhor tech "bang for buck"   │
│         para o teu orçamento                │
│                                             │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│   │📱Telefs │  │📺 TV   │  │🎧 Áudio│   │
│   └─────────┘  └─────────┘  └─────────┘   │
│                                             │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│   │💻Laptop│  │⌚Watch  │  │📱Tablet│   │
│   └─────────┘  └─────────┘  └─────────┘   │
│                                             │
│           Powered by IA Gemini ✨           │
└─────────────────────────────────────────────┘
```

**Cards por Categoria:**
- Design moderno, limpo
- Ícones grandes e apelativos
- Hover effect (levitar, shadow)
- Click → Entra no fluxo de perguntas

---

## 💬 FLUXO DE PERGUNTAS (Interface Conversacional)

### **Exemplo: Telemóveis**

```
┌─────────────────────────────────────────────┐
│  📱 TELEMÓVEIS                    [1/5]      │
│                                             │
│  Qual é o teu orçamento?                   │
│                                             │
│  ┌─────────┐  ┌─────────┐                  │
│  │ €300    │  │ €500    │                  │
│  │ Básico  │  │ Médio   │                  │
│  └─────────┘  └─────────┘                  │
│                                             │
│  ┌─────────┐  ┌─────────┐                  │
│  │ €800    │  │ €1000+  │                  │
│  │ Premium │  │ Flagship│                  │
│  └─────────┘  └─────────┘                  │
│                                             │
│                  [← Voltar]                 │
└─────────────────────────────────────────────┘
```

**Características:**
- ✅ **Barra de progresso** visual (1/5, 2/5, etc)
- ✅ **Botões grandes** fáceis de clicar (mobile-first)
- ✅ **Voltar atrás** sempre disponível
- ✅ **Animações suaves** (fade in/out)
- ✅ **Icons contextuais** para cada opção
- ✅ **Rápido** - Transição instantânea

---

## 🤖 IA GEMINI - CONFIGURAÇÃO

### **Modelo:**
- **Preferencial:** Gemini 2.5 Flash
- **Alternativa:** Gemini 2.0 Flash
- **Razão:** Melhor relação qualidade/custo

### **Prompt Engineering (Carlos será responsável):**

```
SISTEMA:
És especialista em tech bang-for-buck para o mercado português.
Tom: Confiável, direto, útil, português de Portugal natural.

TAREFA:
Categoria: [Telemóveis/TV/Headphones/etc]
Orçamento: [Faixa €X-Y]
Prioridades: [Câmara/Desempenho/Bateria/etc]
Outras preferências: [...]

IMPORTANTE:
- Foco em "bang for buck" = melhor relação qualidade/preço
- Não o mais caro, nem o mais barato
- Justifica PORQUÊ esta escolha é a melhor
- Faixas de preço, não preços exatos (€450-500)
- Mercado português/europeu

OUTPUT:
1. RECOMENDAÇÃO PRINCIPAL:
   - Nome completo do produto
   - Faixa de preço (€)
   - Justificação detalhada (3-4 pontos concretos)
   - Principais specs relevantes

2. ALTERNATIVAS (2-3):
   - Nome + faixa de preço
   - Breve justificação vs recomendação principal
   - Quando considerar (ex: "Se orçamento mais apertado")

Tom: Natural PT-PT, sem jargão excessivo, útil.
```

### **Cache & Otimização:**
- Cache de recomendações por 24h (mesmas respostas = custo zero)
- Rate limiting: 3 comparações por IP/hora (free)
- Premium (futuro): unlimited comparações

---

## 📊 SISTEMA DE PREÇOS - FAIXAS (Não Scraping Diário)

### **Abordagem Aprovada:**

**OPÇÃO A - Faixas Gerais:**
```
"Este telemóvel está na faixa dos €450-500"
"Normalmente encontras entre €800-900"
```

**OPÇÃO B - Preços de Referência (Atualização Semanal):**
```
Ana (product-data) atualiza semanalmente:
- Google Pixel 8a: €450-500 (Worten, Fnac)
- iPhone SE 2024: €520-550 (Amazon.es, PCDiga)
- Samsung Galaxy A54: €400-450 (Várias lojas)
```

**Vantagem:**
- ✅ Não quebra com mudanças de HTML
- ✅ Sem bloqueios de scraping
- ✅ Manutenção semanal (não diária)
- ✅ Foco na recomendação, não no preço exato

---

## 💰 MONETIZAÇÃO - LINKS DE AFILIADOS

### **Estratégia:**

**FASE 1 - Afiliados (Imediato):**
```
Recomendação Principal:
- Google Pixel 8a (€450-500)
- [Ver na Amazon.es] → Link afiliado
- [Ver na Worten] → Link afiliado (se disponível)
- [Comparar preços] → Kuantokusta (parceria?)
```

**Plataformas de Afiliados:**
- ✅ **Amazon Associates** (amazon.es, amazon.de)
- ✅ **TradeTracker Portugal** (várias lojas PT)
- ✅ **Awin** (Worten, Fnac se disponível)
- ✅ **Impact/Partnerize** (marcas diretas)

**Comissões Esperadas:**
- Eletrónica: 1-5% por venda
- Volume: 100 conversões/mês = €200-500/mês (inicial)
- Escala: 1000 conversões/mês = €2000-5000/mês

**FASE 2 - Premium (Futuro):**
- Free: 3 comparações/dia
- Premium (€4.99/mês): Unlimited + sem ads + features extra

---

## 🎨 DESIGN - PÁGINA DE RESULTADOS

### **Layout:**

```
┌─────────────────────────────────────────────┐
│  ✅ ENCONTRÁMOS O MELHOR PARA TI!          │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  🏆 RECOMENDAÇÃO PRINCIPAL          │   │
│  │                                     │   │
│  │  [Imagem Produto]                   │   │
│  │                                     │   │
│  │  Google Pixel 8a                    │   │
│  │  €450-500                           │   │
│  │  ⭐⭐⭐⭐⭐ (4.7/5)                    │   │
│  │                                     │   │
│  │  PORQUÊ ESTA ESCOLHA?               │   │
│  │  • Câmara ao nível de flagship      │   │
│  │  • 7 anos de atualizações          │   │
│  │  • €21 mais barato que Galaxy A54   │   │
│  │  • Melhor software de fotografia    │   │
│  │                                     │   │
│  │  [🛒 Ver na Amazon] [🔍 Worten]     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  📊 ALTERNATIVAS A CONSIDERAR              │
│                                             │
│  ┌──────────────┐  ┌──────────────┐        │
│  │ iPhone SE    │  │ Nothing 2a   │        │
│  │ €520-550     │  │ €380-420     │        │
│  │ Se preferes  │  │ Poupa €80,   │        │
│  │ iOS          │  │ 85% tão bom  │        │
│  │ [Ver preços] │  │ [Ver preços] │        │
│  └──────────────┘  └──────────────┘        │
│                                             │
│  [🔄 Nova Comparação] [💾 Guardar Resultado]│
└─────────────────────────────────────────────┘
```

**Elementos:**
- ✅ Card destacado para recomendação (shadow, border cyan)
- ✅ Imagem do produto (alta qualidade)
- ✅ Faixa de preço bem visível
- ✅ Rating (se disponível)
- ✅ Justificação em bullet points (fácil de ler)
- ✅ Botões de ação grandes e claros
- ✅ Alternativas em cards menores
- ✅ CTA "Nova Comparação" para reutilização

---

## 📱 CATEGORIAS & PERGUNTAS

### **TELEMÓVEIS**
1. Orçamento? (€300 / €500 / €800 / €1000+)
2. O que valorizas mais? (Câmara / Desempenho / Bateria / Ecrã)
3. Tamanho? (Compacto / Normal / Grande)
4. Marca? (Qualquer / Apple / Samsung / Xiaomi / Outras)
5. Uso principal? (Redes sociais / Gaming / Fotografia / Trabalho)

### **TVs**
1. Orçamento? (€300 / €500 / €800 / €1200+)
2. Tamanho? (43" / 55" / 65" / 75"+)
3. Uso? (Streaming / Gaming / Desporto / Cinema)
4. Tecnologia? (LED / QLED / OLED / Tanto faz)
5. Smart features? (Apps / Assistente voz / Smart home / Não importante)

### **HEADPHONES**
1. Orçamento? (€50 / €100 / €200 / €300+)
2. Tipo? (In-ear / On-ear / Over-ear / True wireless)
3. Uso? (Desporto / Viagem / Casa / Trabalho)
4. Funcionalidade? (ANC / Bateria longa / Som premium / Conforto)
5. Fios? (Wireless / Com fios / Tanto faz)

### **TABLETS**
1. Orçamento? (€200 / €400 / €600 / €800+)
2. Tamanho ecrã? (8" / 10" / 11" / 12"+)
3. Sistema? (iPad / Android / Windows / Tanto faz)
4. Uso? (Multimédia / Trabalho / Desenho / Gaming)
5. Acessórios? (Stylus importante / Teclado / Nenhum)

### **SMARTWATCHES**
1. Orçamento? (€100 / €200 / €300 / €500+)
2. Sistema telemóvel? (iPhone / Android / Ambos)
3. Uso? (Desporto / Saúde / Notificações / Completo)
4. Bateria? (1 dia ok / 3-5 dias / 1+ semana)
5. Estilo? (Desportivo / Elegante / Tanto faz)

### **LAPTOPS**
1. Orçamento? (€400 / €700 / €1000 / €1500+)
2. Uso principal? (Estudante / Trabalho / Gaming / Criativo)
3. Tamanho? (13" portátil / 15" standard / 17" grande)
4. Sistema? (Windows / Mac / Linux / Tanto faz)
5. Prioridade? (Bateria / Performance / Ecrã / Portabilidade)

### **GADGETS**
(Categoria mais genérica, perguntas adaptam-se ao subtype)

---

## ⚡ PERFORMANCE & TÉCNICO

### **Requisitos:**
- ✅ **Tempo resposta:** < 10 segundos após última pergunta
- ✅ **Loading state:** Animação agradável com mensagens
  - "A analisar o mercado..."
  - "A comparar centenas de produtos..."
  - "A encontrar o melhor bang for buck..."
- ✅ **Mobile-first:** Design pensado para telemóvel
- ✅ **Responsivo:** Funciona perfeitamente em desktop também
- ✅ **Acessível:** Bom contraste, font size adequado

### **Tech Stack:**
```
Frontend:
- Next.js 14 App Router (já tens)
- TailwindCSS (já tens)
- Framer Motion (animações suaves)
- React Hook Form (perguntas)

Backend:
- Next.js API Routes
- Gemini API (2.5 ou 2.0 Flash)
- Cache: Redis ou Vercel KV (recomendações por 24h)

Database (Opcional - Fase 2):
- PostgreSQL ou Supabase
- Guardar: produtos, faixas preço, analytics

Analytics:
- Vercel Analytics
- Google Analytics (já tens)
- Custom events: categoria usada, conclusões, clicks afiliados
```

---

## 📊 MÉTRICAS DE SUCESSO

### **KPIs do Comparador:**
- ✅ **Taxa de conclusão:** > 70% (objetivo inicial)
- ✅ **Taxa de click em afiliado:** > 15%
- ✅ **Conversões:** 5-10% dos clicks geram venda
- ✅ **Tempo médio:** 2-3 minutos por comparação
- ✅ **Satisfação:** Feedback positivo > 80%

### **Monetização:**
- ✅ **Mês 1:** €100-300 (teste)
- ✅ **Mês 3:** €500-1000 (validação)
- ✅ **Mês 6:** €2000-5000 (escala)

---

## 🚀 DIFERENCIAL COMPETITIVO

**vs Kuantokusta:**
- ✅ Eles: Comparação de preços
- ✅ Nós: Recomendação inteligente "bang for buck"

**vs Pplware/4gnews:**
- ✅ Eles: Reviews estáticas
- ✅ Nós: Ferramenta interativa personalizada

**vs Amazon:**
- ✅ Eles: Vendedor (interesse em vender qualquer coisa)
- ✅ Nós: Curador imparcial focado em valor

---

## ✨ FEATURES WOW (Fase 2 - Futuro)

- 🔔 **Alertas de Preço:** "Avisa-me quando descer para €X"
- 💾 **Guardar Comparações:** Perfil user, histórico
- 🤝 **Partilhar:** "Partilha esta recomendação com amigo"
- 📊 **Dashboard:** Ver produtos guardados, comparações anteriores
- 🏆 **Community:** Votação: "Concordas com recomendação?"
- 📈 **Trending:** "Produtos mais comparados esta semana"

---

## 🎯 OBJETIVO FINAL

**Prismatek Comparador = Referência #1 em Portugal para:**
- "melhor telemóvel [X] euros"
- "qual tv comprar"
- "headphones bang for buck"
- "laptop para estudantes"

**User feeling após usar:**
> "Uau! Em 2 minutos descobri EXATAMENTE o que preciso. Melhor que horas a pesquisar!"

---

## ✅ APROVAÇÃO

**Status:** ✅ ESPECIFICAÇÕES APROVADAS
**Prioridade:** 🔥 ALTA
**Next Step:** Implementação (seguir plano separado)

---

**Documento criado por:** Seth + Claude Sonnet 4.5
**Data:** 12 Janeiro 2026
**Versão:** FINAL 1.0

---

*PRISMATEK - O Comparador mais Inteligente de Portugal* 🏆✨
