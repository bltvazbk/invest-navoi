// Vercel serverless function that forwards an enquiry to Telegram.
//
// SECURITY: the bot token is read from the TELEGRAM_BOT_TOKEN environment
// variable and never shipped to the browser. Set it (and optionally
// TELEGRAM_CHAT_ID) in Vercel → Project → Settings → Environment Variables.

const escapeHtml = (value) =>
  String(value ?? '—')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID || '1087942416'
  if (!token) {
    return res.status(500).json({ error: 'TELEGRAM_BOT_TOKEN is not configured' })
  }

  let data = req.body
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch {
      data = {}
    }
  }
  data = data || {}

  // Honeypot — silently accept and drop obvious bots.
  if (data['bot-field']) {
    return res.status(200).json({ ok: true })
  }

  const text = [
    '🏛 <b>Yangi investitsiya murojaati / New enquiry</b>',
    '<i>investnavoi.com</i>',
    '',
    `👤 <b>Ism / Name:</b> ${escapeHtml(data.name)}`,
    `🏢 <b>Kompaniya / Company:</b> ${escapeHtml(data.company)}`,
    `✉️ <b>Email:</b> ${escapeHtml(data.email)}`,
    `📞 <b>Telefon / Phone:</b> ${escapeHtml(data.phone)}`,
    `🌍 <b>Davlat / Country:</b> ${escapeHtml(data.country)}`,
    `📌 <b>Tarmoq / Sector:</b> ${escapeHtml(data.sector)}`,
    '',
    '💬 <b>Loyiha / Message:</b>',
    escapeHtml(data.message),
  ].join('\n')

  try {
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })
    const result = await resp.json()
    if (!result.ok) {
      return res.status(502).json(result)
    }
    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({ error: String(error) })
  }
}
