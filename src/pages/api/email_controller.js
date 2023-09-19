import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.example.com', // HostGator SMTP server
  port: 587, // Port for SMTP (HostGator typically uses 587)
  secure: false, // Set to true if you're using a secure connection (e.g., with SSL)
  auth: {
    user: 'astrular@astrumstellar.com', // Your HostGator email address
  },
});

export const sendEmail = async (data) => {
  const { name, reason, category, message } = data;

  const mailOptions = {
    from: 'astrular@astrumstellar.com', // Your HostGator email address
    to: 'astrular@astrumstellar.com', // Recipient's email address
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Inquiry: ${reason}
      Request Category: ${category}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return 'Email sent successfully';
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send email');
  }
};
