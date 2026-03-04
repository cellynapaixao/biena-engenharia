import { MapPin, Mail, Phone } from "lucide-react"

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { label: "Projetos em BIM", href: "#servicos" },
      { label: "Compatibilização", href: "#servicos" },
      { label: "Coordenação Técnica", href: "#servicos" },
      { label: "Aprovações Regulatórias", href: "#servicos" },
      { label: "Consultoria BIM", href: "#servicos" },
      { label: "Treinamentos", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Ver Cases", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-xl font-bold text-primary">Biena</p>
            <p className="text-sm text-muted-foreground">Engenharia e Consultoria</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Transformamos a complexidade das instalações prediais em precisão digital.
              Referência em BIM no Maranhão.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Av. Avicênia, loja 13, Calhau — São Luís/MA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href="tel:+5598985323281"
                  className="transition-colors hover:text-foreground"
                >
                  (98) 98532-3281
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href="mailto:email@biena.com.br"
                  className="transition-colors hover:text-foreground"
                >
                  email@biena.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-foreground">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} Biena Engenharia e Consultoria. Todos os direitos reservados.`}
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: Sob consulta | São Luís — MA
          </p>
        </div>
      </div>
    </footer>
  )
}
