import { supabase } from "@/providers/db";

export const createAccount = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: 'test@email.com',
    password: 'example-password',
  })
  console.log(data, error)
}

