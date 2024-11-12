import { createClient } from "@supabase/supabase-js";

// Importing environment variables
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = "https://zjcujdhxrekqqljhhlaf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqY3VqZGh4cmVrcXFsamhobGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxODgyNTgsImV4cCI6MjA0Mjc2NDI1OH0.GDznTBOE8YZ6hgKmb6-H27hFVfA6OPJp3z0Xoi4Kmkg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
