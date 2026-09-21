import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Icon } from './Icon'

export function BackToTop() {
  const { t } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:bg-gold-400 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label={t('common.backToTop')}
    >
      <Icon name="chevron-down" size={22} className="rotate-180" strokeWidth={2.4} />
    </button>
  )
}
