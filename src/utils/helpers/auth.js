import { supabase } from "@/providers/db";

export const createAccount = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: 'coco@cocoapp.com',
    password: 'password',
  })
  console.log(data, error)
}

