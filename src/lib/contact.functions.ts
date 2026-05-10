import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(5).max(5000),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!pass) {
      return { success: false, error: "Email service not configured." };
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "soaf.baz@gmail.com",
        pass,
      },
    });

    const escape = (s: string) =>
      s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

    try {
      await transporter.sendMail({
        from: `"Basketball Stars Contact" <soaf.baz@gmail.com>`,
        to: "game@basketballstarsonline.online",
        replyTo: `"${data.name}" <${data.email}>`,
        subject: `[Contact] ${data.subject}`,
        text: `From: ${data.name} <${data.email}>\n\nSubject: ${data.subject}\n\n${data.message}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
            <h2 style="color:#e85d3a;border-bottom:2px solid #e85d3a;padding-bottom:8px">New Contact Message</h2>
            <p><strong>From:</strong> ${escape(data.name)} &lt;${escape(data.email)}&gt;</p>
            <p><strong>Subject:</strong> ${escape(data.subject)}</p>
            <hr/>
            <p style="white-space:pre-wrap">${escape(data.message)}</p>
          </div>
        `,
      });
      return { success: true };
    } catch (err) {
      console.error("Contact email send failed:", err);
      return { success: false, error: "Failed to send. Please try again later." };
    }
  });
