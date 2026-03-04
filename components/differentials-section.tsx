"use client"

import {
  ShieldCheck,
  TrendingDown,
  Timer,
  Users,
  Cpu,
  FileCheck,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const differentials = [
  {
    icon: ShieldCheck,
    stat: "100%",
    label: "Compatibilização 3D",
    description:
      "Todos os projetos são modelados e compatibilizados em ambiente 3D, garantindo a detecção de conflitos antes da execução.",
  },
  {
    icon: TrendingDown,
    stat: "-40%",
    label: "Redução de retrabalho",
    description:
      "Projetos BIM reduzem drasticamente retrabalhos em obra, economizando tempo e recursos.",
  },
  {
    icon: Timer,
    stat: "2x",
    label: "Agilidade em aprovações",
    description:
      "Documentação técnica completa e conforme normas vigentes acelera o processo de aprovação regulatória.",
  },
  {
    icon: Users,
    stat: "150+",
    label: "Projetos entregues",
    description:
      "Experiência comprovada em projetos residenciais, comerciais, escolares e hospitalares de alta complexidade.",
  },
  {
    icon: Cpu,
    stat: "BIM",
    label: "Tecnologia nativa",
    description:
      "Diferente de quem adapta projetos 2D, trabalhamos nativamente em BIM, aproveitando todo o potencial da tecnologia.",
  },
  {
    icon: FileCheck,
    stat: "ANVISA",
    label: "Conformidade sanitária",
    description:
      "Expertise em projetos hospitalares com conformidade rigorosa para aprovações junto à Vigilância Sanitária.",
  },
]

export function DifferentialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Por que a Biena
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Diferenciais que impactam o resultado da sua obra
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Unimos expertise em projetos de alta complexidade técnica com a inteligência do BIM
            para garantir total previsibilidade de custos e prazos.
          </p>
        </div>

        <div
          className={`mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {differentials.map((item) => (
            <div key={item.label} className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">{item.stat}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Objection buster */}
        <div
          className={`mt-16 rounded-2xl border border-secondary/20 bg-accent p-8 md:p-10 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold text-primary">
            BIM custa mais caro?
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            O investimento em projetos BIM se paga rapidamente ao eliminar retrabalhos,
            reduzir desperdícios de material e acelerar a aprovação regulatória. Clientes
            que migraram para o BIM reportam economia de até 30% nos custos totais da obra.
            Além disso, nossas soluções se integram perfeitamente com equipes já existentes,
            sem interromper o fluxo de trabalho atual.
          </p>
        </div>
      </div>
    </section>
  )
}
