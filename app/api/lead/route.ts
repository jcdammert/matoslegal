import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    // Development: just log to console
    console.log("[/api/lead] GHL_WEBHOOK_URL not set. Form submission:", body);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      matter: body.matter,
      message: body.message,
      source: "matoslegal.com",
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
