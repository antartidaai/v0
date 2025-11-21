import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Send to external webhook
    const webhookUrl = "https://webhook.algorithpro.com/webhook/webhook_partial_lead"

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error in partial-lead webhook:", error)
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 })
  }
}
