import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, currentRole } = body;

    if (!name || !email || !currentRole) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        role_title VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      INSERT INTO leads (name, email, role_title)
      VALUES (${name}, ${email}, ${currentRole})
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        role_title = EXCLUDED.role_title
    `;

    return NextResponse.json({
      success: true,
      message: 'Successfully registered for early access!',
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to save your information. Please try again.' },
      { status: 500 }
    );
  }
}
