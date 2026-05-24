import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hszdakoqapvmrxlyftmf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzemRha29xYXB2bXJ4bHlmdG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NTczNzEsImV4cCI6MjA5NDQzMzM3MX0.Hy-bGoe9ZafMhgNUOMMkMNDeH2dPmqWmJDyPSrq2Nps";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
