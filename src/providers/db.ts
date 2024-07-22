import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_DB_URL_DEVELOPMENT as string
const supabaseKey = process.env.NEXT_PUBLIC_DB_KEY_DEVELOPMENT as string

export const supabase = createClient(supabaseUrl, supabaseKey);