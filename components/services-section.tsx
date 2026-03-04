"use client"

import {
  Building2,
  Layers3,
  ClipboardCheck,
  ShieldCheck,
  GraduationCap,
  Wrench,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Building2,
    title: "Projetos de Instalações Prediais em BIM",
    description:
      "Projetos completos de instalações hidráulicas, elétricas, HVAC e gases medicinais em ambiente 3D com total rastreabilidade técnica.",
    benefit: "Elimine conflitos antes da obra começar.",
  },
  {
    icon: Layers3,
    title: "Compatibilização de Projetos",
    description:
      "Integração de todas as disciplinas em modelo único, identificando interferências e garantindo que cada sistema funcione em harmonia.",
    benefit: "Zero retrabalho no canteiro.",
  },
  {
    icon: ClipboardCheck,
    title: "Planejamento e Coordenação Técnica",
    description:
      "Coordenação multidisciplinar que garante alinhamento entre equipes, prazos e orçamento desde a concepção do projeto.",
    benefit: "Previsibilidade total de custos e prazos.",
  },
  {
    icon: ShieldCheck,
    title: "Aprovações Regulatórias",
    description:
      "Suporte completo em aprovações junto a órgãos reguladores, incluindo conformidade sanitária para projetos hospitalares.",
    benefit: "Aprovações sem entraves burocráticos.",
  },
  {
    icon: Wrench,
    title: "Consultoria em Implementação BIM",
    description:
      "Assessoria especializada para empresas que desejam migrar para o BIM, com metodologia estruturada e acompanhamento integral.",
    benefit: "Transição segura para o BIM.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos em Metodologia BIM",
    description:
      "Capacitação de equipes técnicas em ferramentas e processos BIM, preparando sua empresa para as exigências do mercado.",
    benefit: "Equipe preparada para o futuro.",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="servicos"
      ref={ref}
      className="bg-muted py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Serviços e Soluções
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Soluções completas em engenharia digital
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada serviço é desenhado para resolver os desafios reais de construtoras e gestores
            que enfrentam retrabalhos, estouros de orçamento e falta de coordenação técnica.
          </p>
        </div>

        <div
          className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-primary">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <p className="mt-4 text-sm font-medium text-secondary">
                {service.benefit}
              </p>

              <a
                href="https://wa.me/5598985323281?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Biena."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/90 hover:shadow-md"
              >
                Fale com a Biena e reduza riscos na sua obra
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
