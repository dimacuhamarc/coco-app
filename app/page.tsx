'use client';

import React from 'react';

import { Paragraph, Caption, GradientHeader } from '@/components/common/text';
import Navbar from '@/components/layout/nav';

const copy = {
  hero: {
    caption: 'Meet Coco!',
    header: 'Your Space for Thoughts and Feelings',
    body: 'Unlock the power of your thoughts with Coco, the journaling app that helps you understand yourself better. With Coco, you can effortlessly track your moods, identify triggering keywords, and receive personalized advice to improve your well-being.',
  },
};

function Home() {
  
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24 ">
        
        <div className="max-w-hero flex flex-col items-center ">
          <div className="max-w-hero-inner flex flex-col items-center pt-24">
            <Caption 
              text={copy.hero.caption} 
              style="text-center"
            />
            <GradientHeader
              text={copy.hero.header}
              style="text-center"
              theme={1}
            />
          </div>
          <Paragraph 
            text={copy.hero.body} 
            style="text-justify pt-1" 
            type={1} 
          />
        </div>
      </main>
    </>
  );
}

export default Home;
