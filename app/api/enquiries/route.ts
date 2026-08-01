import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const enquiry = await request.json();
    const requiredFields = ["name", "phone", "email", "service"];
    const hasMissingField = requiredFields.some((field) => !String(enquiry[field] ?? "").trim());

    const phone = String(enquiry.phone ?? "").replace(/\D/g, "").replace(/^91/, "");
    if (hasMissingField || !emailPattern.test(enquiry.email) || !/^[6-9]\d{9}$/.test(phone) || !enquiry.consent) {
      return NextResponse.json({ message: "Please complete all required fields and accept the communication consent." }, { status: 400 });
    }

    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "not provided";
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const message = String(enquiry.message ?? "No additional message");

    if (!process.env.RESEND_API_KEY || !process.env.ENQUIRY_FROM) {
      return NextResponse.json({ message: "Enquiry delivery is not configured yet. Please call +91 88518 94350." }, { status: 503 });
    }

    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM,
        to: ["compliance@mazumaindia.com"],
        subject: "New Website Enquiry",
        text: `Customer Details\n\nName: ${enquiry.name}\nMobile: ${enquiry.phone}\nEmail: ${enquiry.email}\nCompany: ${enquiry.company ?? "Not provided"}\nSelected Service: ${enquiry.service}\nMessage: ${message}\n\nReceived: ${timestamp}`
      })
    });

    if (!mailResponse.ok) {
      return NextResponse.json({ message: "We could not send your enquiry. Please try again or call us." }, { status: 502 });
    }

    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      await fetch(`${process.env.SUPABASE_URL}/rest/v1/enquiries`, {
        method: "POST",
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify({
          name: enquiry.name,
          phone: enquiry.phone,
          email: enquiry.email,
          company: enquiry.company ?? null,
          service: enquiry.service,
          message,
          source: enquiry.source ?? "website",
          created_at: new Date().toISOString(),
          ip_address: ipAddress
        })
      });
    }

    return NextResponse.json({ message: "Thank you. Our expert will contact you shortly." });
  } catch {
    return NextResponse.json({ message: "Something went wrong. Please try again shortly." }, { status: 500 });
  }
}
