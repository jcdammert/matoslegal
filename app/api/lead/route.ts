import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, firstName, phone, email, matter, message } = body;
  const displayName = name || firstName || "Unknown";

  // Send email notification to Rosalind
  try {
    await resend.emails.send({
      from: "Matos Legal Website <onboarding@resend.dev>",
      to: "rosalind@matoslegal.com",
      subject: `New Contact Form Submission — ${matter || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: #1a1a2e; padding: 24px; border-bottom: 4px solid #c8102e;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 13px;">matoslegal.com</p>
          </div>
          <div style="padding: 32px 24px; background: #fafafa; border: 1px solid #e5e5e5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 15px; color: #1a1a2e;">${displayName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 15px;"><a href="tel:${phone}" style="color: #c8102e;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 15px;"><a href="mailto:${email}" style="color: #c8102e;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Matter</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 15px; color: #1a1a2e;">${matter || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 15px; color: #1a1a2e; line-height: 1.6;">${message || "—"}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 24px; background: #f0f0f0; font-size: 11px; color: #999; text-align: center;">
            Submitted via matoslegal.com contact form
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("[/api/lead] Email send failed:", err);
    // Don't block the response — form still succeeds even if email fails
  }

  // Also forward to GHL webhook if configured
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: displayName, lastName: "", email, phone, matter, message, source: "matoslegal.com" }),
      });
    } catch (err) {
      console.error("[/api/lead] GHL webhook failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
