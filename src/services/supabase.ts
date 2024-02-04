import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://thgvedbenyhxdxqbscmd.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ3ZlZGJlbnloeGR4cWJzY21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NDIxMDcsImV4cCI6MjAyMjAxODEwN30.2dDGCx7hjYb9r8Ilab-XWnFFMf3P0wJblFv8Zh9tAd8`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
