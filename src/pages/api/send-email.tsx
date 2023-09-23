import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Extract form data from the request body
  const { name, reason, category, message } = req.body;

  // Create an HTML email template using the form data
  const emailTemplate = `
    <html>
      <body>
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Inquiry:</strong> ${reason}</p>
        <p><strong>Request Category:</strong> ${category}</p>
        <p><strong>Message:</strong> ${message}</p>
      </body>
    </html>
  `;

  // Send the email
  await sendEmail({
    to: "deestringz@gmail.com",
    subject: "StellarSpace Contact Form Submission",
    html: emailTemplate,
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
