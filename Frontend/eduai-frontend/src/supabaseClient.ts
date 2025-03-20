import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fjtqufpjgxlylzkemebt.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdHF1ZnBqZ3hseWx6a2VtZWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjE4OTQsImV4cCI6MjA1ODAzNzg5NH0.joDGtJMWQwZRs9oCom4z0LkMXrOXpJDWZ5wQWhtwhCE'; // Replace with your Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);