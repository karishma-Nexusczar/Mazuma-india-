# Taxtation Mazuma India

Premium responsive landing page for tax, compliance and business advisory services.

## Start locally

1. Install Node.js 18.17 or later.
2. In this folder, run `npm install`.
3. Copy `.env.example` to `.env.local` and add your Resend and optional Supabase credentials.
4. Run `npm run dev` and open `http://localhost:3000`.

All calls-to-action open the same consultation form. The API validates the enquiry, emails `info@mazumaindia.com` through Resend, and also saves to Supabase when its environment variables are configured.
