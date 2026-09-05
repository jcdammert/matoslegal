import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("[/api/lead] POST received");
  const body = await req.json();
  const { firstName, lastName, phone, email, matter, message, turnstileToken } = body;
  console.log("[/api/lead] Submitter:", email, matter);

  // Verify Turnstile token — hard block only if no token at all (direct POST bots)
  if (!turnstileToken) {
    console.warn("[/api/lead] No Turnstile token — likely bot, rejecting");
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret && turnstileToken !== "__unavailable__") {
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: turnstileSecret, response: turnstileToken }),
    });
    const result = await verify.json();
    console.log("[/api/lead] Turnstile result:", result.success, result["error-codes"]);
    if (!result.success) {
      console.warn("[/api/lead] Turnstile invalid token — rejecting");
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  } else {
    console.log("[/api/lead] Turnstile skipped:", !turnstileSecret ? "no secret set" : "error fallback");
  }

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
