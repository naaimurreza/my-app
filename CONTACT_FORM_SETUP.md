# Contact Form Setup Guide

The contact form is now functional and will send emails to `info@brainandlife.com` when submitted.

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (free tier includes 3,000 emails/month)
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add your Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Verify Domain (Optional but Recommended)

For production, you should verify your domain in Resend:
1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `brainandlifehospital.com`)
3. Add the DNS records provided by Resend
4. Once verified, update the `from` email in `/app/api/contact/route.ts` to use your verified domain

### 4. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check `info@brainandlife.com` inbox for the email

## Features

- ✅ Form validation (name, email, message required)
- ✅ Email validation
- ✅ Consent checkbox requirement
- ✅ Success/error message display
- ✅ Loading state during submission
- ✅ Form reset after successful submission
- ✅ HTML formatted emails
- ✅ Reply-to set to sender's email

## Troubleshooting

### Emails not sending?

1. Check that `RESEND_API_KEY` is set in `.env.local`
2. Verify the API key is correct in Resend dashboard
3. Check browser console and server logs for errors
4. Ensure you haven't exceeded Resend's rate limits

### Domain verification issues?

- For development, you can use the default Resend domain
- For production, verify your domain to avoid emails going to spam

## Alternative Email Services

If you prefer a different email service, you can modify `/app/api/contact/route.ts` to use:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer with SMTP
