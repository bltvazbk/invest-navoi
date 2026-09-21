import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { L, LINKS, sectors } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { LocationMap } from './LocationMap'

const EMPTY = { name: '', company: '', email: '', phone: '', country: '', sector: '', message: '' }

export function Contact() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Send to the serverless function, which forwards to Telegram.
    // The bot token stays server-side; nothing secret is exposed here.
    fetch('/api/submit-enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {})
    setSubmitted(true)
  }

  const field =
    'w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-heading placeholder:text-subtle outline-none transition focus:border-gold-500/60 focus:bg-surface'

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bgalt" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-[130px]" />
      </div>

      <div className="container-wide">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: intro + direct contacts */}
          <div>
            <Reveal>
              <span className="section-eyebrow">
                <Icon name="sparkles" size={14} />
                {t('contact.eyebrow')}
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="section-title mt-4">{t('contact.title')}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {t('contact.subtitle')}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                  {t('contact.directTitle')}
                </h3>

                {/* Contact person */}
                <div className="glass-card flex items-center gap-4 p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-display text-lg font-bold text-navy-950">
                    AB
                  </span>
                  <div>
                    <div className="font-semibold text-heading">Azizbek Boltaev</div>
                    <div className="text-xs text-accenttext">{t('contact.specialistRole')}</div>
                    <a
                      href={`tel:${LINKS.specialistPhone.replace(/\s/g, '')}`}
                      className="mt-1 flex items-center gap-1.5 text-sm text-body transition hover:text-accenttext"
                    >
                      <Icon name="phone" size={14} />
                      {LINKS.specialistPhone}
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:info@investnavoi.com"
                  className="flex items-center gap-3 text-body transition hover:text-accenttext"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accenttext">
                    <Icon name="mail" size={18} />
                  </span>
                  info@investnavoi.com
                </a>
                <div className="flex items-start gap-3 text-body">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accenttext">
                    <Icon name="map-pin" size={18} />
                  </span>
                  <span className="pt-2">{t('contact.address')}</span>
                </div>
                <div className="flex items-center gap-3 text-body">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accenttext">
                    <Icon name="clock" size={18} />
                  </span>
                  {t('contact.hours')}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: enquiry form */}
          <Reveal delay={140}>
            <div className="glass-card p-7 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-400/15 text-teal-500">
                    <Icon name="check" size={32} strokeWidth={2.2} />
                  </span>
                  <p className="mt-6 max-w-sm text-lg font-medium text-heading">
                    {t('contact.thanks')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot for basic spam protection */}
                  <input
                    type="text"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={update}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      required
                      placeholder={t('contact.formName')}
                      className={field}
                      aria-label={t('contact.formName')}
                    />
                    <input
                      name="company"
                      value={form.company}
                      onChange={update}
                      placeholder={t('contact.formCompany')}
                      className={field}
                      aria-label={t('contact.formCompany')}
                    />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      required
                      placeholder={t('contact.formEmail')}
                      className={field}
                      aria-label={t('contact.formEmail')}
                    />
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update}
                      required
                      placeholder={t('contact.formPhone')}
                      className={field}
                      aria-label={t('contact.formPhone')}
                    />
                    <input
                      name="country"
                      value={form.country}
                      onChange={update}
                      placeholder={t('contact.formCountry')}
                      className={field}
                      aria-label={t('contact.formCountry')}
                    />
                    <select
                      name="sector"
                      value={form.sector}
                      onChange={update}
                      className={`${field} appearance-none`}
                      aria-label={t('contact.formSector')}
                    >
                      <option value="" className="bg-surface text-body">
                        {t('contact.formSector')}
                      </option>
                      {sectors.map((s) => (
                        <option key={s.id} value={s.title.en} className="bg-surface text-body">
                          {L(s.title, lang)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    required
                    rows={4}
                    placeholder={t('contact.formMessage')}
                    className={`${field} resize-none`}
                    aria-label={t('contact.formMessage')}
                  />

                  <button type="submit" className="btn-primary w-full">
                    {t('contact.formSubmit')}
                    <Icon name="arrow-right" size={16} />
                  </button>

                  <p className="text-xs leading-relaxed text-subtle">{t('contact.formNote')}</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Location map */}
        <Reveal delay={100}>
          <LocationMap />
        </Reveal>
      </div>
    </section>
  )
}
