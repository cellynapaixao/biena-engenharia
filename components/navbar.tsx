"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Biena
          </span>
          <span
            className={`hidden text-sm font-medium sm:block transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}
          >
            Engenharia e Consultoria
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5598985323281?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Biena."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-all hover:bg-secondary/90 hover:shadow-md"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5598985323281?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Biena."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md bg-secondary px-5 py-2.5 text-center text-sm font-semibold text-secondary-foreground shadow-sm transition-all hover:bg-secondary/90"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
