// Serverless endpoint that forwards an enquiry to Telegram.
//
// SECURITY: the bot token is read from the TELEGRAM_BOT_TOKEN environment
// variable and NEVER shipped to the browser. Set it (and optionally
// TELEGRAM_CHAT_ID) in Netlify → Site settings → Environment variables.

const escapeHtml = (value) =>
  String(value ?? '—')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID || '1087942416'

  if (!token) {
    return { statusCode: 500, body: 'TELEGRAM_BOT_TOKEN is not configured' }
  }

  let data = {}
  try {
    data = JSON.parse(event.body || '{}')
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' }
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
      return { statusCode: 502, body: JSON.stringify(result) }
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (error) {
    return { statusCode: 500, body: String(error) }
  }
}
