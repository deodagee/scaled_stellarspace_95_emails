import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import WelcomeTemplate from "../emails/WelcomeTemplate";
import { sendEmail } from "../../lib/email";
import React from "react"; // Import React

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const emailTemplate = <WelcomeTemplate /> as React.ReactElement; // Explicitly type as ReactElement
  await sendEmail({
    to: "deestringz@gmail.com",
    subject: "StellarSpace Requests",
    html: render(emailTemplate), // Pass the JSX element to render
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
