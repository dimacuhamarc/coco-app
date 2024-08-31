'use client';

import React, { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { useCreateRouter } from '@/utils/helpers/nav';

export default function NavItem({
  icon = <>React Icon Component</>,
  text = 'Text',
  route = '/',
}: {
  icon: ReactElement;
  text: string;
  route: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const { pathname, navToRoute } = useCreateRouter();

  useEffect(() => {
    setIsActive(pathname === route);
  }, [pathname, route]);

  const handleClick = () => {
    navToRoute(route)
  }

  return (
    <button
      onClick={handleClick}
      className={`link ${(!isActive && 'link-hover') || (isActive && 'underline-offset-4 underline')} flex flex-row justify-center items-center gap-1`}
    >
      {icon}
      {text}
    </button>
  );
}
