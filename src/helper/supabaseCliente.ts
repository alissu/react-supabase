import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://akrxnmoopfkwdapcxahy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrcnhubW9vcGZrd2RhcGN4YWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMTI4MTMsImV4cCI6MjA1NTU4ODgxM30.2v_TKdQYdJF5Rut2dMvLHE8-FsLsv_igHyRsW4EWcP0';

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;