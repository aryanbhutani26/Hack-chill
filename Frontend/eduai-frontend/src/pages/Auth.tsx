import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || ''
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const signIn = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    return { user, error };
};

export const signOut = async () => {
    await supabase.auth.signOut();
};
