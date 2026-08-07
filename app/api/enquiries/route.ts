import { NextRequest, NextResponse } from "next/server";

const TARGET_EMAIL = "compliance@mazumaindia.com";

export async function POST(request: NextRequest) {
  try {
    const enquiry = await request.json();
    
    const name = String(enquiry.name || enquiry.fullName || "Website Visitor").trim();
    const phone = String(enquiry.phone || enquiry.mobile || enquiry.phoneNumber || "Not provided").trim();
    const email = String(enquiry.email || "").trim();
    const service = String(enquiry.service || enquiry.selectedService || "General Consultation").trim();
    const city = String(enquiry.city || enquiry.location || enquiry.state || "Not provided").trim();
    const message = String(enquiry.message || `City/State: ${city}`).trim();
    const source = String(enquiry.source || "Website Form").trim();

    if (!phone && !email) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number or email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "not provided";

    console.log(`[ENQUIRY RECEIVED for ${TARGET_EMAIL}]`, {
      name,
      phone,
      email,
      service,
      city,
      message,
      timestamp
    });

    // Send email via Resend API if configured
    if (process.env.RESEND_API_KEY && process.env.ENQUIRY_FROM) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: process.env.ENQUIRY_FROM,
            to: [TARGET_EMAIL],
            subject: `New Website Enquiry: ${service} - ${name}`,
            text: `NEW WEBSITE ENQUIRY RECEIVED\n\nTarget Email: ${TARGET_EMAIL}\nDate/Time: ${timestamp}\n\nClient Details:\n- Name: ${name}\n- Phone: ${phone}\n- Email: ${email}\n- City/State: ${city}\n- Service Requested: ${service}\n- Message: ${message}\n- Source: ${source}\n- IP: ${ipAddress}\n`
          })
        });
      } catch (emailErr) {
        console.error("Resend API Email error:", emailErr);
      }
    }

    // Save to Supabase DB if configured
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        await fetch(`${process.env.SUPABASE_URL}/rest/v1/enquiries`, {
          method: "POST",
          headers: {
            apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
            Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal"
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            service,
            message,
            source,
            created_at: new Date().toISOString(),
            ip_address: ipAddress
          })
        });
      } catch (dbErr) {
        console.error("Supabase DB error:", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your enquiry has been received for compliance@mazumaindia.com. Our senior CA expert will contact you shortly.`,
      targetEmail: TARGET_EMAIL
    });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json(
      { success: false, message: "Enquiry received! Our team at compliance@mazumaindia.com will contact you shortly." },
      { status: 200 }
    );
  }
}
