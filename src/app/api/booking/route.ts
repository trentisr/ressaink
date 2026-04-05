import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const description = formData.get("description") as string;
    const placement = formData.get("placement") as string;
    const budget = formData.get("budget") as string;
    const referenceImage = formData.get("referenceImage") as File | null;

    const attachments = [];
    if (referenceImage && referenceImage.size > 0) {
      const arrayBuffer = await referenceImage.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: referenceImage.name,
        content: buffer,
      });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "your-email@example.com",
      subject: `New Tattoo Booking: ${name}`,
      replyTo: email,
      attachments: attachments,
      html: `
        <h1>New Tattoo Booking Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Placement:</strong> ${placement}</p>
        <p><strong>Budget:</strong> ${budget}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
