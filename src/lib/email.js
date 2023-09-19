import nodemailer from "nodemailer";

const smtpOptions = {
  host: "smtp.gmail.com",
  port:"587",
  secure: false,
  auth: {
    user:"stellarspace95@gmail.com",
    pass:"epry bnzh tnbi doez",
  },
};

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from:"stellarspace@gmail.com",
    ...data,
  });
};

export { sendEmail };
