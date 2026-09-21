import { useLanguage } from '../i18n/LanguageContext'
import { UzFlag } from './UzFlag'

// Official government attribution strip: state emblem + hokimlik / department
// name + national flag. Shown at the top of the header and in the footer.
export function GovBar() {
  const { t } = useLanguage()
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <img
          src="/images/emblem.png"
          alt={t('gov.republic')}
          className="h-9 w-auto shrink-0"
          width={34}
          height={36}
        />
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-heading sm:text-xs">
            {t('gov.hokimlik')}
          </div>
          <div className="text-[10px] text-muted sm:text-[11px]">{t('gov.department')}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <UzFlag className="h-5 w-auto rounded-[3px] ring-1 ring-line" />
        <span className="hidden text-[11px] font-medium text-muted md:inline">
          {t('gov.republic')}
        </span>
      </div>
    </div>
  )
}
