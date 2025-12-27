import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, program, source } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS curriculum_leads (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        program VARCHAR(100),
        source VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(email, program)
      )
    `;

    // Insert or update lead
    await sql`
      INSERT INTO curriculum_leads (email, phone, program, source)
      VALUES (${email}, ${phone || null}, ${program || 'ai-fellowship'}, ${source || 'curriculum-download'})
      ON CONFLICT (email, program) DO UPDATE SET
        phone = COALESCE(EXCLUDED.phone, curriculum_leads.phone),
        source = EXCLUDED.source,
        created_at = CURRENT_TIMESTAMP
    `;

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    });
  } catch (error) {
    console.error('Error saving curriculum lead:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
