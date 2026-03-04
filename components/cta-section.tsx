"use client"

import { useInView } from "@/hooks/use-in-view"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-primary py-24 lg:py-32"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
          Pronto para começar?
        </p>

        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
          Garantimos previsibilidade total de custos e prazos com projetos BIM
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Construtoras que apostam em BIM economizam até 30% nos custos totais da obra.
          Converse com nossos especialistas e descubra como levar essa eficiência para
          o seu próximo empreendimento.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5598985323281?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Biena."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground shadow-lg transition-all hover:bg-secondary/90 hover:shadow-xl hover:scale-[1.02]"
          >
            Seu projeto precisa de precisão antes de chegar ao canteiro
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/50">
          Resposta em até 2 horas úteis via WhatsApp
        </p>
      </div>
    </section>
  )
}
