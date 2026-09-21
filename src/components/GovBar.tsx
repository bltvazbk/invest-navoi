import { useLanguage } from '../i18n/LanguageContext'
import { LINKS } from '../data/content'
import { Icon } from './Icon'
import { UzFlag } from './UzFlag'

// Official government attribution strip: state emblem + hokimlik / department
// name on the left; trust line + national flag on the right.
export function GovBar() {
  const { t } = useLanguage()
  return (
    <div className="flex items-center justify-between gap-3 py-2.5">
      <a href="#government" className="group flex items-center gap-3">
        <img
          src="/images/emblem.svg"
          alt={t('gov.republic')}
          className="h-10 w-auto shrink-0"
          width={38}
          height={40}
        />
        <div className="leading-tight">
          <div className="text-[11px] font-bold uppercase tracking-wide text-heading transition group-hover:text-accenttext sm:text-[13px]">
            {t('gov.hokimlik')}
          </div>
          <div className="text-[10px] text-muted sm:text-[11px]">{t('gov.department')}</div>
        </div>
      </a>

      <div className="flex items-center gap-4 sm:gap-5">
        <a
          href={`tel:${LINKS.trustPhone.replace(/\s/g, '')}`}
          className="hidden items-center gap-1.5 text-[11px] font-medium text-muted transition hover:text-accenttext md:flex"
        >
          <Icon name="phone" size={13} className="text-accenttext" />
          {LINKS.trustPhone} (1066)
        </a>
        <div className="hidden h-6 w-px bg-line sm:block" />
        <div className="flex items-center gap-2">
          <UzFlag className="h-5 w-10 rounded-[2px] shadow-sm ring-1 ring-black/10" />
          <span className="hidden text-[11px] font-medium text-muted lg:inline">
            {t('gov.republic')}
          </span>
        </div>
      </div>
    </div>
  )
}
