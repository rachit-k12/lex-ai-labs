import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 50 }),
  roleTitle: varchar('role_title', { length: 255 }).notNull(),
  userType: varchar('user_type', { length: 50 }),
  organizationName: varchar('organization_name', { length: 255 }),
  companySize: varchar('company_size', { length: 50 }),
  institutionType: varchar('institution_type', { length: 100 }),
  interestedProgram: varchar('interested_program', { length: 100 }),
  message: text('message'),
  source: varchar('source', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const curriculumLeads = pgTable('curriculum_leads', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  program: varchar('program', { length: 100 }),
  source: varchar('source', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type CurriculumLead = typeof curriculumLeads.$inferSelect;
export type NewCurriculumLead = typeof curriculumLeads.$inferInsert;
