import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, reason, message, consent } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Please provide consent to proceed' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission - ${reason || 'General Enquiry'}`;
    const emailBody = `
New contact form submission from Brain and Life Hospital website:

Name: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email}
Reason: ${reason || 'Not specified'}

Message:
${message}

---
This email was sent from the contact form on brainandlifehospital.com
Consent provided: ${consent ? 'Yes' : 'No'}
    `.trim();

    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      console.error('Available env vars:', Object.keys(process.env).filter(key => key.includes('RESEND')));
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support directly.' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Brain and Life Hospital <noreply@brainandlifehospital.com>',
        to: ['naaimur7@gmail.com'],
        reply_to: email,
        subject: emailSubject,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
            <p>You have received a new contact form submission from the Brain and Life Hospital website.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Reason:</strong> ${reason || 'Not specified'}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #0ea5e9;">Message:</h3>
              <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 8px;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 12px;">
              This email was sent from the contact form on brainandlifehospital.com<br>
              Consent provided: ${consent ? 'Yes' : 'No'}
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Resend API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will get back to you soon!',
        id: data.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
