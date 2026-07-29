import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-15",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json(
        { message: "Contact form is not configured yet." },
        { status: 500 },
      );
    }

    const body = await request.json();

    const fullName = cleanText(body.fullName);
    const companyName = cleanText(body.companyName);
    const email = cleanText(body.email);
    const phone = cleanText(body.phone);
    const serviceInterest = cleanText(body.serviceInterest);
    const message = cleanText(body.message);

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: "Please provide your name, email, and message." },
        { status: 400 },
      );
    }

    await client.create({
      _type: "contactLead",
      fullName,
      companyName,
      email,
      phone,
      serviceInterest,
      message,
      status: "New",
    });

    return NextResponse.json(
      { message: "Your message has been received." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
