import { db, curriculumLeads } from '@/lib/db';
import { and, eq } from 'drizzle-orm';
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

    const programValue = program || 'ai-fellowship';
    const sourceValue = source || 'curriculum-download';

    // Check if lead exists for this email and program combination
    const existingLead = await db.query.curriculumLeads.findFirst({
      where: and(
        eq(curriculumLeads.email, email),
        eq(curriculumLeads.program, programValue)
      ),
    });

    if (existingLead) {
      // Update existing lead
      await db
        .update(curriculumLeads)
        .set({
          phone: phone || existingLead.phone,
          source: sourceValue,
          createdAt: new Date(),
        })
        .where(
          and(
            eq(curriculumLeads.email, email),
            eq(curriculumLeads.program, programValue)
          )
        );
    } else {
      // Insert new lead
      await db.insert(curriculumLeads).values({
        email,
        phone,
        program: programValue,
        source: sourceValue,
      });
    }

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
