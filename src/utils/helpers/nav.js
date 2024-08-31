import React, { ReactElement } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

function useCreateRouter() {
  const router = useRouter();
  const pathname = usePathname();

  const navToRoute = (route) => {
    router.push(route);
  };

  return {
    router,
    pathname,
    navToRoute: navToRoute
  };
}

export {
  useCreateRouter
}