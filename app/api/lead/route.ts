import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("[/api/lead] POST received");
  const body = await req.json();
  const { firstName, lastName, phone, email, matter, message } = body;
  console.log("[/api/lead] Submitter:", email, matter);

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  console.log("[/api/lead] GHL URL set:", !!webhookUrl);

  if (webhookUrl) {
    try {
      const ghlRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, matter, message, source: "matoslegal.com" }),
      });
      console.log("[/api/lead] GHL response:", ghlRes.status);
    } catch (err) {
      console.error("[/api/lead] GHL webhook failed:", err);
    }
  } else {
    console.warn("[/api/lead] GHL_WEBHOOK_URL not set — skipping");
  }

  return NextResponse.json({ ok: true });
}
