import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, firstName, phone, email, matter, message } = body;
  const displayName = name || firstName || "Unknown";

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
