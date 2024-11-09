'use client';

import React, { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { useCreateRouter } from '@/utils/helpers/nav';

export default function FooterItem({
  style = 'text-t-dark',
  text = 'Text',
  route = '/',
}: {
  style?: string;
  text: string;
  route: string;
}) {
  const { pathname, navToRoute } = useCreateRouter();

  const handleClick = () => {
    navToRoute(route)
  }

  return (
    <button
      onClick={handleClick}
      className={`${style} link link-hover underline-offset-4 flex flex-row items-center gap-1`}
    >
      {text}
    </button>
  );
}
