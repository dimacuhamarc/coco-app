import { BiHome, BiBody, BiDiamond } from 'react-icons/bi';

const CTA_LINKS = [
  {
    title: 'Sign In',
    route: '/sign-in',
    isButton: false,
    style: 'link link-hover',
  },
  {
    title: 'Try it free',
    route: '/sign-up',
    isButton: true,
    style: 'btn btn-primary'
  }
];

const NAV_LINKS = [
  {
    title: 'Home',
    icon: <BiHome className="text-neutral-900" />,
    route: '/',
  },
  {
    title: 'About',
    icon: <BiBody className="text-neutral-900" />,
    route: '/about',
  },
  {
    title: 'Features',
    icon: <BiDiamond className="text-neutral-900" />,
    route: '/features',
  }
];

const FOOTER_LINKS = [
  {
    title: 'Home',
    route: '/',
  },
  {
    title: 'About',
    route: '/about',
  },
  {
    title: 'Features',
    route: '/features',
  },
  {
    title: 'Privacy Policy',
    route: '/privacy-policy',
  },
  {
    title: 'Contact',
    route: '/contact',
  },
  {
    title: 'Support',
    route: '/support',
  }
]

export {
  CTA_LINKS,
  NAV_LINKS,
  FOOTER_LINKS
}