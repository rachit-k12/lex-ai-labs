import { db, leads } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      currentRole,
      userType,
      organizationName,
      companySize,
      institutionType,
      interestedProgram,
      message,
      source,
    } = body;

    if (!name || !email || !currentRole) {
      return NextResponse.json(
        { error: 'Name, email and current role are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Check if lead exists
    const existingLead = await db.query.leads.findFirst({
      where: eq(leads.email, email),
    });

    if (existingLead) {
      // Update existing lead
      await db
        .update(leads)
        .set({
          name,
          phone: phone || existingLead.phone,
          roleTitle: currentRole,
          userType,
          organizationName: organizationName || existingLead.organizationName,
          companySize: companySize || existingLead.companySize,
          institutionType: institutionType || existingLead.institutionType,
          interestedProgram,
          message: message || existingLead.message,
          source,
        })
        .where(eq(leads.email, email));
    } else {
      // Insert new lead
      await db.insert(leads).values({
        name,
        email,
        phone,
        roleTitle: currentRole,
        userType,
        organizationName,
        companySize,
        institutionType,
        interestedProgram,
        message,
        source,
      });
    }

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
