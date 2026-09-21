import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { GovBar } from './GovBar'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

const NAV = [
  { id: 'government', key: 'nav.government' },
  { id: 'sectors', key: 'nav.sectors' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'services', key: 'nav.services' },
  { id: 'map', key: 'nav.map' },
  { id: 'news', key: 'nav.news' },
] as const

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/95 shadow-sm backdrop-blur-md">
      {/* Gold accent bar */}
      <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

      {/* Government attribution strip — collapses away on scroll */}
      <div
        className={`overflow-hidden border-b border-line bg-bgalt transition-all duration-300 ${
          scrolled ? 'max-h-0 border-b-0 opacity-0' : 'max-h-24 opacity-100'
        }`}
      >
        <div className="container-wide">
          <GovBar />
        </div>
      </div>

      {/* Main navigation row */}
      <div className="container-wide flex h-[64px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-body transition hover:bg-surface-2 hover:text-heading"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            {t('nav.investNow')}
            <Icon name="arrow-right" size={16} />
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2 text-heading lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-line bg-bg lg:hidden">
          <nav className="container-wide flex flex-col py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-body transition hover:bg-surface-2 hover:text-heading"
              >
                {t(item.key)}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-3 w-full">
              {t('nav.investNow')}
              <Icon name="arrow-right" size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
