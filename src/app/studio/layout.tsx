import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return <div suppressHydrationWarning={true}>{children}</div>;
}

export default RootLayout;
