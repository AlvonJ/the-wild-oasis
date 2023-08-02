import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ymgfeoujojbieqleywcq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZ2Zlb3Vqb2piaWVxbGV5d2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5MjM2NDgsImV4cCI6MjAwNTQ5OTY0OH0.1C2zewD5H-0RMReShuqjAeDX6nj3tcql5UeOpuJwtIc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
