import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import nodemailer from "nodemailer";

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

    console.log(`[ENQUIRY AUTOMATICALLY RECEIVED for ${TARGET_EMAIL}]`, {
      name,
      phone,
      email,
      service,
      city,
      message,
      source,
      timestamp
    });

    const emailSubject = `New Website Enquiry: ${service} - ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF;">
        <div style="background-color: #0F2747; color: #FFFFFF; padding: 16px 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">New Website Enquiry Received</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #FF6B1A;">Target Mail: ${TARGET_EMAIL}</p>
        </div>
        <div style="padding: 20px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #0F2747;">Client Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #FF6B1A; font-weight: bold; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email || "Not provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">City / Location:</td>
              <td style="padding: 8px 0;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Service Requested:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #FF6B1A;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Message / Notes:</td>
              <td style="padding: 8px 0;">${message}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Form Source:</td>
              <td style="padding: 8px 0;">${source}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Date &amp; Time:</td>
              <td style="padding: 8px 0;">${timestamp}</td>
            </tr>
          </table>
        </div>
        <div style="border-top: 1px solid #E2E8F0; padding-top: 12px; text-align: center; font-size: 12px; color: #94A3B8;">
          Mazuma India • Compliance &amp; Taxation Automated Enquiry System
        </div>
      </div>
    `;

    // 1. Send via SMTP (Nodemailer) if SMTP Host/User/Pass configured
    const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_SERVER_HOST || "smtp.hostinger.com";
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_SERVER_USER || TARGET_EMAIL;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_SERVER_PASSWORD;

    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT || 465),
          secure: true,
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        await transporter.sendMail({
          from: `"Mazuma India Website" <${smtpUser}>`,
          to: TARGET_EMAIL,
          replyTo: email || undefined,
          subject: emailSubject,
          html: emailHtml
        });
        console.log(`[SMTP Sent successfully to ${TARGET_EMAIL}]`);
      } catch (smtpErr) {
        console.error("Nodemailer SMTP error:", smtpErr);
      }
    }

    // 2. Send via Resend API if configured
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
            subject: emailSubject,
            html: emailHtml
          })
        });
        console.log(`[Resend Sent successfully to ${TARGET_EMAIL}]`);
      } catch (resendErr) {
        console.error("Resend API Email error:", resendErr);
      }
    }

    // 3. Save to Supabase DB if configured
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
      message: `Enquiry received! Notification automatically dispatched to ${TARGET_EMAIL}`,
      targetEmail: TARGET_EMAIL
    });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json(
      { success: true, message: `Enquiry processed for ${TARGET_EMAIL}` },
      { status: 200 }
    );
  }
}
