import nodemailer from "nodemailer";

const smtpOptions = {
  host: "smtp.gmail.com",
  port:"465",
  secure: true,
  auth: {
    user:"deestringz@gmail.com",
    pass:"Amabanga1$",
  },
};

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from:"deestringz@gmail.com",
    ...data,
  });
};

export { sendEmail };
