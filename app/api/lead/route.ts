import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, phone, email, matter, message } = body;

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, matter, message, source: "matoslegal.com" }),
      });
    } catch (err) {
      console.error("[/api/lead] GHL webhook failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
