import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";
// @ts-ignore
import nodemailer from "nodemailer";

const TARGET_EMAIL = process.env.CONSULTATION_EMAIL || "compliance@mazumaindia.com";

export async function POST(request: NextRequest) {
  try {
    const enquiry = await request.json();

    // 1. Honeypot Anti-Spam Check
    if (enquiry.website_hp || enquiry.hp) {
      console.log("[SPAM BOT TRAPPED IN HONEYPOT]");
      return NextResponse.json({
        success: true,
        message: "Request Submitted Successfully. Thank you for contacting Mazuma India. Our team will contact you shortly."
      });
    }

    // 2. Extract All Field Variants
    const name = String(enquiry.name || enquiry.fullName || enquiry.clientName || "Website Visitor").trim();
    const phone = String(enquiry.phone || enquiry.mobile || enquiry.phoneNumber || enquiry.mobileNumber || "").trim();
    const email = String(enquiry.email || "").trim();
    const service = String(enquiry.service || enquiry.selectedService || enquiry.serviceRequired || enquiry.companyType || enquiry.topic || "General Enquiry").trim();
    const city = String(enquiry.city || enquiry.cityState || enquiry.location || enquiry.state || "Not provided").trim();
    const message = String(enquiry.message || enquiry.notes || `City/State: ${city}`).trim();
    const source = String(enquiry.source || enquiry.formType || "Website Form").trim();
    const preferredTime = String(enquiry.preferredTime || enquiry.callbackTime || "As soon as possible").trim();

    // Server-Side Validation
    if (!phone && !email) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number or email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "not provided";

    console.log(`[CENTRAL ENQUIRY API - Target: ${TARGET_EMAIL}]`, {
      name,
      phone,
      email,
      service,
      city,
      message,
      source,
      preferredTime,
      timestamp
    });

    // 3. Dynamic Subject Generation
    let emailSubject = `New ${service} Request - Mazuma India`;
    if (source.toLowerCase().includes("consultation")) {
      emailSubject = `New Consultation Request: ${service} - ${name}`;
    } else if (source.toLowerCase().includes("callback")) {
      emailSubject = `New Callback Request: ${service} - ${name}`;
    } else if (source.toLowerCase().includes("contact")) {
      emailSubject = `New Contact Enquiry: ${name}`;
    }

    // 4. Professional HTML Email Content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 14px; background-color: #FFFFFF;">
        <div style="background-color: #0F2747; color: #FFFFFF; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">MAZUMA INDIA</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #FF6B1A; font-weight: 600;">New Website Enquiry Received</p>
        </div>

        <div style="padding: 24px 20px; color: #334155; line-height: 1.6;">
          <div style="background-color: #F8FAFC; border-left: 4px solid #FF6B1A; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px;">
            <strong style="color: #0F2747;">Form Type / Source:</strong> ${source}<br />
            <strong style="color: #0F2747;">Destination Email:</strong> ${TARGET_EMAIL}
          </div>

          <h3 style="color: #0F2747; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-top: 0;">Customer Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #0F2747;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #FF6B1A; font-weight: bold; text-decoration: none;">${phone || "Not provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB;">${email || "Not provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">City / State:</td>
              <td style="padding: 8px 0;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Service Required:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #FF6B1A;">${service}</td>
            </tr>
            ${preferredTime !== "As soon as possible" ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Preferred Callback Time:</td>
              <td style="padding: 8px 0;">${preferredTime}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0F2747;">Message / Notes:</td>
              <td style="padding: 8px 0;">${message}</td>
            </tr>
          </table>

          <div style="background-color: #F1F5F9; padding: 10px 14px; border-radius: 6px; font-size: 12.5px; color: #64748B;">
            <strong>Submission Details:</strong><br />
            • Date &amp; Time: ${timestamp}<br />
            • Client IP Address: ${ipAddress}
          </div>
        </div>

        <div style="border-top: 1px solid #E2E8F0; padding-top: 14px; text-align: center; font-size: 12px; color: #94A3B8;">
          Mazuma India • Compliance &amp; Taxation Automated System
        </div>
      </div>
    `;

    // 5. Send via SMTP (Nodemailer)
    const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_SERVER_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_SERVER_USER || TARGET_EMAIL;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS || process.env.EMAIL_SERVER_PASSWORD;

    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
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

    // 6. Secondary Resend API Fallback
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

    // 7. Database Persistence (Supabase / MySQL compatibility)
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

    // 8. MySQL Database Persistence
    try {
      // @ts-ignore
      const { query } = await import("@/lib/db/mysql");
      await query(
        `INSERT INTO enquiries (name, phone, email, service, message, source, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, phone, email, service, message, source, ipAddress]
      );
      console.log(`[MySQL Saved successfully]`);
    } catch (mysqlErr) {
      console.error("MySQL Insert error:", mysqlErr);
    }

    return NextResponse.json({
      success: true,
      message: "Request Submitted Successfully. Thank you for contacting Mazuma India. Our team will contact you shortly.",
      targetEmail: TARGET_EMAIL
    });
  } catch (err) {
    console.error("Central Contact API Error:", err);
    return NextResponse.json(
      {
        success: true,
        message: "Request Submitted Successfully. Thank you for contacting Mazuma India. Our team will contact you shortly."
      },
      { status: 200 }
    );
  }
}
