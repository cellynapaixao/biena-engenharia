"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Quem Somos
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Transformamos complexidade em precisão digital
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Biena Engenharia e Consultoria nasceu da convicção de que a construção civil
                merece projetos à altura da sua complexidade. Com profundo conhecimento em
                instalações prediais, levamos a metodologia BIM para cada etapa do projeto,
                da concepção ao canteiro.
              </p>
              <p>
                Nossa equipe é especializada em projetos multidisciplinares para
                empreendimentos residenciais, comerciais, escolares e hospitalares.
                Unimos expertise técnica e tecnologia de ponta para eliminar conflitos
                antes que eles cheguem à obra.
              </p>
              <p>
                Acreditamos que a tecnologia BIM é o pilar para uma construção civil sem
                desperdícios e com total transparência. Esse é o nosso compromisso com
                cada cliente.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="text-2xl font-bold text-primary">8+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="text-2xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Projetos entregues</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Equipe da Biena Engenharia analisando projetos BIM em computadores."
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-secondary/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
