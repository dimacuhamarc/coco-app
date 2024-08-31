import React from 'react';
import Image from 'next/image';
import { BiHome, BiBody, BiDiamond } from 'react-icons/bi';
import NavItem from './navItem';
import { NAV_LINKS, CTA_LINKS } from '@/utils/constants/layout/generalLinks';
import CTAButton from '@/components/common/buttons/ctaButton';

export default function Navbar() {
  return (
    <div className="w-full bg-neutral-300 flex flex-row py-4 gap-44 justify-center">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image alt='brand' src={'/assets/brand/coco.svg'} width={155.37} height={36.74} />
      <div className="flex flex-row gap-8">
        {
          NAV_LINKS.map((item, index) => {
            return <NavItem key={index} icon={item.icon} text={item.title} route={item.route} />;
          })
        }
      </div>
      <div className="flex flex-row gap-4">
        {
          CTA_LINKS.map((item, index) => {
            return <CTAButton key={index} title={item.title} style={item.style} route={item.route} />;
          })
        }
      </div>
    </div>
  );
}
