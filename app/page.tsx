'use client'
import Heading from '@/components/common/text/heading';
import Subtitle from '@/components/common/text/subtitle';
import Paragraph from '@/components/common/text/paragraph';
import React from 'react'
import Caption from '@/components/common/text/caption';

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <Heading text="This is Heading 1" type={1} theme={1} />
      <Heading text="This is Heading 2" type={2} />
      <Heading text="This is Heading 3" type={3} />
      <Heading text="This is Heading 4" type={4} />

      <Subtitle text="This is Subtitle 1" type={1} theme={1} />
      <Subtitle text="This is Subtitle 2" type={2} />
      <Paragraph text="This is Paragraph 1" type={1} theme={1} />
      <Paragraph text="This is Paragraph 2" type={2} />

      <Caption text="This is Caption" theme={1} />
    </main>
  );
}

export default Home;
