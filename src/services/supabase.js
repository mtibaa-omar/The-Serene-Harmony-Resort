import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gclrxokfapdgvxrtdrep.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbHJ4b2tmYXBkZ3Z4cnRkcmVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MjkzMTEsImV4cCI6MjA0NzEwNTMxMX0.KUUFUxcrK0nLWLo2_iacTvhuW01AejO_5cpPCL9e5JQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
