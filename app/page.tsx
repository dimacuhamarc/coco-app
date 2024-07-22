
import React from 'react'
import SampleButton from "@/components/common/buttons/sampleButton";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold text-center">
            Welcome to Coco Apps
          </h1>
          <p className="text-lg text-center">
            A place to write your thoughts and feelings
          </p>
          <SampleButton title="create account" />
          <button className="btn btn-active btn-neutral">Neutral</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
