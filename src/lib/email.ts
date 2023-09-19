import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "deestringz@gmail.com",
    pass: process.env.SMTP_PASSWORD || "Amabanga1$",
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
}
