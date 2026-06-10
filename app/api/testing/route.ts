import nodemailer from "nodemailer";

export async function GET() {
  try {
    const transporter = nodemailer.createTransport({
      host: "us2.smtp.mailhostbox.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@marktaleworld.com",
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    return Response.json({ success: true, message: "SMTP connected" });
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    });
  }
}
