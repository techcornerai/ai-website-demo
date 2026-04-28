import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  website?: string;
  message?: string;
};

function cleanValue(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = cleanValue(body.name);
    const businessName = cleanValue(body.businessName);
    const email = cleanValue(body.email);
    const phone = cleanValue(body.phone);
    const website = cleanValue(body.website);
    const message = cleanValue(body.message);

    if (!name || !businessName || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete your name, business name, email, phone, and message.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO;
    const contactFrom = process.env.CONTACT_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !contactTo || !contactFrom) {
      console.error("Missing SMTP environment variables.");
      return NextResponse.json(
        { success: false, message: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `New Website Review Request from ${name}`;

    const text = `
New website review request

Name: ${name}
Business Name: ${businessName}
Email: ${email}
Phone: ${phone}
Website: ${website || "Not provided"}

Message:
${message}
    `.trim();

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="color: #0f172a;">New Website Review Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business Name:</strong> ${escapeHtml(businessName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 13px; color: #6b7280;">Sent from the AI Website Demo contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true, message: "Your request was sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
