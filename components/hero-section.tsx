import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Construção moderna com instalações prediais de alta tecnologia"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
        <p className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
          Referência em BIM no Maranhão
        </p>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Previsibilidade total de custos e prazos com projetos compatibilizados em BIM
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          Atendemos construtoras, investidores e gestores de obras em empreendimentos
          residenciais, comerciais e complexos de saúde que exigem coordenação técnica
          avançada.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5598985323281?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Biena."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            Seu projeto precisa de precisão antes de chegar ao canteiro
          </a>
          <a
            href="#depoimentos"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Ver Cases
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-primary-foreground/10 pt-8 md:gap-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">150+</p>
            <p className="text-sm text-primary-foreground/60">Projetos entregues</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">8+</p>
            <p className="text-sm text-primary-foreground/60">Anos de experiência</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">100%</p>
            <p className="text-sm text-primary-foreground/60">BIM nativo</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">0</p>
            <p className="text-sm text-primary-foreground/60">Conflitos em obra</p>
          </div>
        </div>
      </div>
    </section>
  )
}
