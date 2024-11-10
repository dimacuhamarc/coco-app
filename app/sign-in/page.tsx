import Heading from '@/components/common/text/heading';
import SignInForm from '@/components/modules/onboarding-forms/sign-in';
import React from 'react';

export default function SignIn() {
  return (
    <div className="flex h-screen flex-col justify-center items-center p-24">
      <SignInForm />
    </div>
  );
}
