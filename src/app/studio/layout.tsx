interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <div
      suppressHydrationWarning={true}
      className="fixed top-0 left-0 w-full min-h-screen z-50">
      {children}
    </div>
  );
}

export default RootLayout;
