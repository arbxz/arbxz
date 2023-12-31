"use client";
import { useEffect, useState } from "react";

import Aside from "@/components/aside/Aside";
import AdminNavigation from "@/components/navigation/AdminNavigation";
import Loader from "@/components/ui-elements/Loader";

function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="select-none bg-background text-foreground">
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="relative flex flex-col px-4 pt-4 gap-4 min-h-screen h-full">
          <AdminNavigation />
          <div className="flex">
            <Aside />
            <main className="w-full">{children}</main>
          </div>
        </div>
      )}
    </div>
  );
}

export default RootLayout;
