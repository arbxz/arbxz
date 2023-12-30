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
        <div className="flex h-screen overflow-hidden">
          <div className="relative flex flex-1 flex-col px-4 pt-4 gap-4">
            <AdminNavigation />
            <div className="flex w-full">
              <Aside />
              <main className="w-full">{children}</main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RootLayout;
