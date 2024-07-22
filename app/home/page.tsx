
'use client'

import React from 'react'
import SampleButton from "@/components/common/buttons/sampleButton";
import {createAccount} from '@/utils/helpers/auth'

function Overview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold text-center">
            Welcome to Coco App
          </h1>
          <p className="text-lg text-center">
            A place to write your thoughts and feelings
          </p>
          {/* <SampleButton title="create account" onClick={() => createAccount()}/> */}
        </div>
      </div>
    </main>
  );
}

export default Overview;
