import React from 'react';
import Image from 'next/image';
import { FOOTER_LINKS } from '@/utils/constants/layout/generalLinks';
import { Heading, Paragraph } from '@/components/common/text';
import FooterItem from '@/components/layout/footer/footerItem';

const copy = {
  footer: 'The Coco Team © 2024',
  suggestion: 'Have a suggestion? Submit a review at',
  suggestion_link: 'Feature Request/Review',
};

export default function Footer() {
  return (
    <div className="w-full bg-neutral-300 flex flex-row py-[82px] px-[90px] justify-center">
      <div className="flex flex-col w-[1014px]">
        <div className="flex flex-row px-[50px] justify-between">
          <div className="flex flex-col justify-start">
            {FOOTER_LINKS.map((item, index) => {
              return (
                <FooterItem key={index} text={item.title} route={item.route} />
              );
            })}
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <Image
              alt="brand"
              src={'/assets/brand/coco.svg'}
              className="flex w-full justify-end"
              width={135.37}
              height={36.74}
            />
            <div>
              <Paragraph text={copy.suggestion} style="text-center" type={2} />
              <FooterItem
                style="flex w-full justify-end"
                text={copy.suggestion_link}
                route="/"
              />
            </div>
          </div>
        </div>
        <div className="divider before:bg-t-dark after:bg-t-dark"></div>
        <div>
          <Heading text={copy.footer} style="text-left" type={5} />
        </div>
      </div>
    </div>
  );
}
