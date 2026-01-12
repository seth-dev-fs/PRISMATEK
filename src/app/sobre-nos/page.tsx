export default function SobreNosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-6">Sobre a PRISMATEK</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Missão</h2>
          <p className="text-foreground leading-relaxed">
            A nossa missão na PRISMATEK é ser a principal fonte de informação e análise tecnológica em Portugal, 
            proporcionando aos nossos leitores conteúdos de alta qualidade, relevantes e inspiradores. 
            Queremos descomplicar o mundo da tecnologia e torná-lo acessível a todos, desde o entusiasta 
            mais experiente ao utilizador ocasional.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Visão Editorial</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Acreditamos num jornalismo tecnológico rigoroso, imparcial e focado nas necessidades do público português. 
            A nossa visão editorial é pautada por:
          </p>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li><strong>Independência:</strong> Garantimos a nossa autonomia face a interesses comerciais ou políticos.</li>
            <li><strong>Qualidade:</strong> Apostamos na investigação aprofundada e na escrita clara e concisa.</li>
            <li><strong>Relevância:</strong> Cobrimos os tópicos que realmente importam para os nossos leitores em Portugal.</li>
            <li><strong>Inovação:</strong> Estamos sempre atentos às novas tendências e tecnologias que moldam o futuro.</li>
            <li><strong>Acessibilidade:</strong> Apresentamos a informação de forma compreensível, sem jargões desnecessários.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Contacto</h2>
          <p className="text-foreground leading-relaxed">
            Tem questões, sugestões ou gostaria de colaborar? Não hesite em contactar-nos:
          </p>
          <ul className="list-disc list-inside text-foreground space-y-2 mt-4">
            <li><strong>Geral:</strong> <a href="mailto:info@prismatek.pt" className="text-primary hover:underline">info@prismatek.pt</a></li>
            <li><strong>Editorial:</strong> <a href="mailto:redacao@prismatek.pt" className="text-primary hover:underline">redacao@prismatek.pt</a></li>
            <li><strong>Publicidade:</strong> <a href="mailto:publicidade@prismatek.pt" className="text-primary hover:underline">publicidade@prismatek.pt</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Política de Transparência</h2>
          <p className="text-foreground leading-relaxed">
            Na PRISMATEK, a transparência é um pilar fundamental. Comprometemo-nos a:
          </p>
          <ul className="list-disc list-inside text-foreground space-y-2 mt-4">
            <li>Declarar quaisquer conflitos de interesse dos nossos autores.</li>
            <li>Distinguir claramente entre conteúdo editorial e conteúdo patrocinado.</li>
            <li>Corrigir erros de forma rápida e visível.</li>
            <li>Manter os dados dos nossos utilizadores seguros e confidenciais, em conformidade com o RGPD.</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
