---
title: "Falhas de segurança em WhatsApp e Signal permitem rastreamento"
date: "2025-12-11T08:27:40.381Z"
category: "internet-apps"
tags:
  - WhatsApp
  - Signal
  - segurança
  - privacidade
  - rastreamento
image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/Whats-App-Tracking.png"
image_source: "rss"
description: "Investigadores da Universidade de Viena expõem falhas em WhatsApp e Signal que permitem rastrear utilizadores. Saiba como esta vulnerabilidade funciona e o q..."
source_url: "https://www.notebookcheck.net/Weak-security-in-WhatsApp-and-Signal-allows-low-skill-attackers-to-track-users.1183239.0.html"
draft: false
needs_review: false
photographer_name: undefined
photographer_url: undefined
---

<!-- generated_by: gemini, model: gemini-2.5-flash, generated_at: 2025-12-11T08:27:40.381Z -->

As aplicações de mensagens WhatsApp e Signal, amplamente elogiadas pela sua segurança e privacidade, estão sob escrutínio após investigadores da Universidade de Viena terem revelado uma vulnerabilidade preocupante. Segundo os peritos, esta falha permite o rastreamento indetetável de utilizadores através de métodos de medição de tempo de ida e volta (RTT), um processo que, de facto, não exige grandes conhecimentos técnicos para ser explorado. A descoberta põe em causa a reputação de fortaleza de privacidade destas plataformas, que são utilizadas por milhões de pessoas em todo o mundo, incluindo em Portugal e na Europa.

## O Método de Rastreamento via RTT

A metodologia de rastreamento identificada assenta na medição do tempo de ida e volta (Round-Trip Time ou RTT) das comunicações. Essencialmente, isto significa que um atacante, mesmo com pouca experiência técnica, pode enviar uma série de pings ou tentativas de conexão a um utilizador e, ao analisar os tempos de resposta, inferir a sua atividade online. Os investigadores da Universidade de Viena demonstraram que esta técnica pode ser usada para perceber quando um utilizador está online ou offline, ou até mesmo para construir um perfil dos seus hábitos de uso, tudo sem deixar rastos óbvios dentro da aplicação. É uma técnica subtil, mas eficaz para contornar as salvaguardas de privacidade que as plataformas procuram oferecer.

## A Facilidade de Exploração da Vulnerabilidade

Um dos aspetos mais alarmantes desta descoberta é a facilidade com que a vulnerabilidade pode ser explorada. Os investigadores não só identificaram a falha, como também desenvolveram um programa simples, já disponível no GitHub, que demonstra a sua exequibilidade. Esta ferramenta permite a qualquer pessoa com conhecimentos básicos de programação replicar o método de rastreamento, o que eleva o nível de preocupação, uma vez que não se trata de uma exploração complexa que exija recursos ou conhecimentos especializados. Aliás, a sua acessibilidade pode transformar esta falha numa ameaça mais generalizada, potencialmente afetando um grande número de utilizadores que confiam cegamente na segurança destas apps.

## Implicações para a Privacidade dos Utilizadores

As implicações desta vulnerabilidade para a privacidade dos utilizadores são consideráveis. Embora não permita aceder diretamente ao conteúdo das mensagens cifradas, a capacidade de rastrear a atividade online de alguém indetetavelmente é, de facto, uma quebra séria da privacidade. No contexto europeu, onde a proteção de dados e a privacidade digital são pilares fundamentais da legislação (como o RGPD), esta revelação acende um sinal de alerta. Os utilizadores esperam que as aplicações que promovem a privacidade ofereçam uma proteção robusta contra qualquer forma de vigilância, e este tipo de rastreamento, mesmo que indireto, mina essa confiança. Resta saber como WhatsApp e Signal irão responder a esta exposição e que medidas serão tomadas para mitigar o risco.

Em suma, a revelação destas falhas de segurança em WhatsApp e Signal é um lembrete de que, mesmo nas plataformas mais seguras, a vigilância persistente dos investigadores é crucial. A facilidade de exploração, demonstrada por uma ferramenta acessível no GitHub, significa que a ameaça é real e imediata. Os utilizadores, que recorrem a estas aplicações precisamente pela sua promessa de privacidade, merecem uma resposta clara e medidas corretivas por parte das empresas. Resta agora aguardar por atualizações que reforcem a segurança e restaurem a confiança dos milhões de pessoas que dependem destas plataformas para as suas comunicações diárias.