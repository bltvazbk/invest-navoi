import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { L, sectors } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

// URL-encode a flat object for Netlify Forms submission.
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const EMPTY = { name: '', company: '', email: '', country: '', sector: '', message: '' }

// NOTE: replace the phone number with the real One-Gateway line before launch.
const CONTACTS = [
  { icon: 'mail', label: 'info@investnavoi.com', href: 'mailto:info@investnavoi.com' },
  { icon: 'phone', label: '+998 79 000 00 00', href: 'tel:+998790000000' },
]

export function Contact() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Post to Netlify Forms. Silently ignored in local dev (no handler).
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'investment-enquiry', ...form }),
    }).catch(() => {})
    setSubmitted(true)
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-gold-500/50 focus:bg-white/[0.07]'

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-900/50" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-[130px]" />
      </div>

      <div className="container-wide grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
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
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
              {t('contact.subtitle')}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t('contact.directTitle')}
              </h3>
              {CONTACTS.map((c) => (
                <a
                  key={c.icon}
                  href={c.href}
                  className="flex items-center gap-3 text-slate-200 transition hover:text-gold-400"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold-400">
                    <Icon name={c.icon} size={18} />
                  </span>
                  {c.label}
                </a>
              ))}
              <div className="flex items-center gap-3 text-slate-300">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold-400">
                  <Icon name="map-pin" size={18} />
                </span>
                {t('contact.address')}
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold-400">
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
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-400/15 text-teal-400">
                  <Icon name="check" size={32} strokeWidth={2.2} />
                </span>
                <p className="mt-6 max-w-sm text-lg font-medium text-white">{t('contact.thanks')}</p>
              </div>
            ) : (
              <form
                name="investment-enquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="investment-enquiry" />
                <p className="hidden">
                  <label>
                    Do not fill this out: <input name="bot-field" onChange={update} />
                  </label>
                </p>

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
                    name="country"
                    value={form.country}
                    onChange={update}
                    placeholder={t('contact.formCountry')}
                    className={field}
                    aria-label={t('contact.formCountry')}
                  />
                </div>

                <select
                  name="sector"
                  value={form.sector}
                  onChange={update}
                  className={`${field} appearance-none`}
                  aria-label={t('contact.formSector')}
                >
                  <option value="" className="bg-navy-800">
                    {t('contact.formSector')}
                  </option>
                  {sectors.map((s) => (
                    <option key={s.id} value={s.title.en} className="bg-navy-800">
                      {L(s.title, lang)}
                    </option>
                  ))}
                </select>

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

                <p className="text-xs leading-relaxed text-slate-500">{t('contact.formNote')}</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
