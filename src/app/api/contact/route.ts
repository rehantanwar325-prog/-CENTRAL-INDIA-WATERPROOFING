import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, message } = body

    if (!name || !phone || !service) {
      return NextResponse.json({ error: 'Name, phone, and service are required' }, { status: 400 })
    }

    const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    // Send WhatsApp message to admin via CallMeBot API
    const whatsappPhone = process.env.WHATSAPP_PHONE
    const whatsappApiKey = process.env.WHATSAPP_API_KEY

    if (whatsappPhone && whatsappApiKey && whatsappApiKey !== 'your-api-key-here') {
      try {
        const whatsappMessage = `🏠 *New Waterproofing Inquiry*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🔧 *Service:* ${service}\n💬 *Message:* ${message || 'N/A'}\n🕐 *Time:* ${time}`

        const encodedMsg = encodeURIComponent(whatsappMessage)
        const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${whatsappPhone}&text=${encodedMsg}&apikey=${whatsappApiKey}`

        const response = await fetch(callMeBotUrl)
        if (response.ok) {
          console.log('WhatsApp message sent successfully to admin')
        } else {
          console.error('WhatsApp send failed, status:', response.status)
        }
      } catch (e) {
        console.error('WhatsApp send failed (non-blocking):', e)
      }
    } else {
      console.log('WhatsApp not configured. Set WHATSAPP_PHONE and WHATSAPP_API_KEY in .env')
    }

    // Send email notification (if configured)
    if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD && process.env.SMTP_PASSWORD !== 'your-16-digit-app-password-here') {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.default.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
          },
        })
        await transporter.sendMail({
          from: process.env.SMTP_EMAIL,
          to: 'yusuftagala1983@gmail.com',
          subject: `New Waterproofing Inquiry from ${name}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:linear-gradient(135deg,#1e40af,#0ea5e9);padding:20px;border-radius:12px 12px 0 0;">
                <h1 style="color:white;margin:0;font-size:20px;">New Waterproofing Inquiry</h1>
              </div>
              <div style="background:#f8fafc;padding:20px;border:1px solid #e2e8f0;border-radius:0 0 12px 12px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;">Name</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${name}</td></tr>
                  <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;">Phone</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${phone}</td></tr>
                  <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;">Service</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${service}</td></tr>
                  <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:bold;color:#475569;">Message</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${message || 'N/A'}</td></tr>
                  <tr><td style="padding:10px;font-weight:bold;color:#475569;">Time</td><td style="padding:10px;">${time}</td></tr>
                </table>
              </div>
            </div>
          `,
        })
        console.log('Email sent successfully')
      } catch (e) {
        console.error('Email send failed (non-blocking):', e)
      }
    }

    console.log('Contact Form:', { name, phone, service, message, time })

    return NextResponse.json({ message: 'Request submitted successfully.' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process. Please call +91 89751 38745.' },
      { status: 500 }
    )
  }
}