import { sendEmail } from '/email_controller'; // Import the sendEmail function

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const result = await sendEmail(req.body); // Call the sendEmail function
      res.status(200).json({ message: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).end();
  }
}
