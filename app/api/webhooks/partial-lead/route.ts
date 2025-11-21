import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("[v0] Partial lead API recibió:", body)

    // Send to external webhook
    const webhookUrl = "https://webhook.algorithpro.com/webhook/webhook_partial_lead"
    console.log("[v0] Enviando a:", webhookUrl)

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    console.log("[v0] Respuesta del webhook externo:", response.status)
    const responseText = await response.text()
    console.log("[v0] Respuesta texto:", responseText)

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Error in partial-lead webhook:", error)
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 })
  }
}
