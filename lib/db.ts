import { neon } from '@neondatabase/serverless';

const sql = neon(
  'postgresql://neondb_owner:npg_yNjh05pdSPFw@ep-ancient-cell-a4czzhlx-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
);

export { sql };
