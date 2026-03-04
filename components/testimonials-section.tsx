"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    quote:
      "A Biena transformou completamente a forma como gerenciamos nossas obras. O nível de detalhamento dos projetos BIM eliminou todos os conflitos que tínhamos no canteiro. Redução de retrabalho na casa dos 40%.",
    name: "Carlos Mendes",
    role: "Diretor de Obras",
    company: "Construtora Mendes & Associados",
  },
  {
    quote:
      "Aprovar projetos hospitalares junto à Vigilância Sanitária sempre foi um desafio. Com a Biena, conseguimos aprovação na primeira tentativa, com toda a documentação técnica impecável.",
    name: "Dra. Mariana Costa",
    role: "Gestora de Empreendimentos",
    company: "Grupo Hospitalar São Lucas",
  },
  {
    quote:
      "A previsibilidade de custos que alcançamos com os projetos compatibilizados da Biena foi decisiva para viabilizar nosso condomínio. Zero surpresas na execução.",
    name: "Roberto Almeida",
    role: "Investidor Imobiliário",
    company: "RA Investimentos",
  },
  {
    quote:
      "Implantamos o BIM na empresa com a consultoria da Biena. Hoje nossa equipe trabalha com muito mais eficiência e os resultados aparecem em cada obra entregue.",
    name: "Eng. Patrícia Lima",
    role: "Coordenadora Técnica",
    company: "Lima Engenharia",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const { ref, isInView } = useInView()

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const testimonial = testimonials[current]

  return (
    <section
      id="depoimentos"
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
            Depoimentos
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Resultados que comprovam nossa expertise
          </h2>
        </div>

        <div
          className={`mx-auto mt-16 max-w-3xl transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
            <Quote className="mb-6 h-10 w-10 text-secondary/30" />

            <blockquote className="text-lg leading-relaxed text-foreground md:text-xl">
              {`"${testimonial.quote}"`}
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} — {testimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="              Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
