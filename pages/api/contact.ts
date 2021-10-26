import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  try {
    const body = JSON.parse(req.body);

    if (body.website !== '') {
      // anti spam
      res.status(200).end();
      return;
    }

    if ('website' in body) {
      delete body.website;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"Okoios Website" <no-reply@okoios.ch>',
      to: 'nugaaah@gmail.com',
      subject: 'New mail from okoios.ch contact form',
      text: `
      Name: ${body.name || '(empty)'}
      company: ${body.company || '(empty)'}
      email: ${body.email || '(empty)'}
      message:
      ${body.message || '(empty)'}
      `,
    });

    res.status(200).end();
  } catch (e) {
    res.status(500).end();
  }
}
