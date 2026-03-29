import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Poder Consulting Website" <${process.env.SMTP_USER}>`,
    to: 'assist@poderconsulting-ng.com',
    replyTo: email,
    subject: `New Enquiry from ${name} — ${service || 'General'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0B5FFF; border-bottom: 2px solid #0B5FFF; padding-bottom: 8px;">New Website Enquiry</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${phone || '—'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td style="padding: 8px 0;">${service || '—'}</td></tr>
        </table>
        <div style="margin-top: 16px;">
          <p style="font-weight: bold; margin-bottom: 4px;">Message</p>
          <p style="background: #f5f7ff; padding: 12px; border-left: 4px solid #0B5FFF; border-radius: 4px; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  })

  return NextResponse.json({ success: true })
}
