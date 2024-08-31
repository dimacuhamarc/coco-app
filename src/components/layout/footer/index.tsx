import React from 'react';
import Image from 'next/image';
import { BiHome, BiBody, BiDiamond } from 'react-icons/bi';
import { NAV_LINKS, CTA_LINKS } from '@/utils/constants/layout/generalLinks';
import CTAButton from '@/components/common/buttons/ctaButton';
import { Heading, Paragraph } from '@/components/common/text';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full bg-neutral-300 flex flex-row py-[82px] px-[90px] justify-center">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      
      <div className="flex flex-col w-[1014px]">
        <div className='flex flex-row px-[50px] justify-between'>
          <div className="flex flex-col">
            <Link href='/'> link 1 </Link>
            <Link href='/'> link 2 </Link>
            <Link href='/'> link 3 </Link>
            <Link href='/'> link 1 </Link>
            <Link href='/'> link 2 </Link>
            <Link href='/'> link 3 </Link>
          </div>
          <div className='flex flex-col gap-2 justify-between'>
            <Image alt='brand' src={'/assets/brand/coco.svg'} className='flex w-full justify-end' width={155.37} height={36.74} />
            <div>
              <Paragraph text='Have a suggestion? Submit a review at' style='text-center' type={2} />
              <Link className='flex w-full justify-end' href='/'>Feature Request/Review</Link>
            </div>
          </div>
        </div>
        <div className="divider before:bg-t-dark after:bg-t-dark"></div>
        <div>
          <Heading text='© 2024 The Coco Team. All Rights Reserved' style='text-left' type={5} />
        </div>
      </div>
    </div>
  );
}
