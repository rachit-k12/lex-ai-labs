import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  linkedin?: string;
  experience?: string;
  role: string;
  source: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the lead (in production, you'd save to database)
    console.log('New lead received:', {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    // Here you can integrate with:
    // 1. Database (MongoDB, PostgreSQL, etc.)
    // 2. Email service (SendGrid, Resend, etc.)
    // 3. CRM (HubSpot, Salesforce, etc.)
    // 4. Google Sheets API
    // 5. Notion API
    // 6. Slack webhook for notifications

    // Example: Send notification to Slack (uncomment and configure)
    // const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    // if (slackWebhookUrl) {
    //   await fetch(slackWebhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       text: `New Lead: ${data.name} (${data.email}) - ${data.role}`,
    //       blocks: [
    //         {
    //           type: 'section',
    //           text: {
    //             type: 'mrkdwn',
    //             text: `*New Lead Received*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Role:* ${data.role}\n*Experience:* ${data.experience || 'Not specified'}\n*Source:* ${data.source}`,
    //           },
    //         },
    //       ],
    //     }),
    //   });
    // }

    // Example: Send to Google Sheets (uncomment and configure)
    // const googleSheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    // if (googleSheetsUrl) {
    //   await fetch(googleSheetsUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    // }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        leadId: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
