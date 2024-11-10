'use client';

import Heading from '@/components/common/text/heading';
import Subtitle from '@/components/common/text/subtitle';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { LuMail, LuLock, LuKeyRound, LuEye } from 'react-icons/lu';

import { supabase } from '@/providers/db';

export default function SignInForm() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    supabase.from('journal_entries').select('*').then((res) => {
      console.log(res);
    });
  }, []);

  const handleSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: "dimacuha.marc@gmail.com",
        password: "password",
      });
      
      if (error) throw error;
      console.log('Signup successful:', data);
      
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "dimacuha.marc@gmail.com",
        password: "password",
      });
      if (error) throw error;
      console.log('Signin successful:', data);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-base-100 rounded-xl py-24 px-20 max-w-md">
      <Heading text="Sign In" type={2} />
      <div className="flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <LuMail className="h-4 w-4 opacity-70" />
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <LuKeyRound className="h-4 w-4 opacity-70" />
          <input type="password" className="grow" placeholder="Password" />
          <LuEye className="h-4 w-4 opacity-70" />
        </label>
        <button className="btn btn-primary w-full" onClick={handleSignIn}>Sign In</button>
      </div>
      <div className="flex gap-2 items-center">
        <p className="font-light text-md">Don&apos;t have an account?</p>
        <Link className="text-md link link-primary" href="/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
