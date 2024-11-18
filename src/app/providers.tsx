'use client';

import * as React from 'react';

import { AppProviderContext } from '@/context/appContext';

import StyledJsxRegistry from './registry';

const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

import dynamic from 'next/dynamic';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function Providers({ children }: any) {
  return (
    <StyledJsxRegistry>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AppProviderContext>{children}</AppProviderContext>
      </ThemeProvider>
    </StyledJsxRegistry>
  );
}
