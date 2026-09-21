import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

const NAV = [
  { id: 'why', key: 'nav.why' },
  { id: 'sectors', key: 'nav.sectors' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'freezone', key: 'nav.freezone' },
  { id: 'incentives', key: 'nav.incentives' },
  { id: 'process', key: 'nav.process' },
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
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-navy-950/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-wide flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            {t('nav.investNow')}
            <Icon name="arrow-right" size={16} />
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
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
        <div className="border-t border-white/10 bg-navy-950/98 lg:hidden">
          <nav className="container-wide flex flex-col py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {t(item.key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              {t('nav.investNow')}
              <Icon name="arrow-right" size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
