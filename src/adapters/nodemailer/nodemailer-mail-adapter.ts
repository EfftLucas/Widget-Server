import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8bd9639ccc9b54",
    pass: "1c7f093826a33a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Lucas Effting <lucasefftingn@hotmail.com>",
      subject,
      html: body,
    });
  }
}