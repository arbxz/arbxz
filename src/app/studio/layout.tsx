interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="google" content="nositelinkssearchbox" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
