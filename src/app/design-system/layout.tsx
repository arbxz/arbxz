"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import Aside from "@/components/aside/Aside";
import AdminNavigation from "@/components/navigation/AdminNavigation";
import Loader from "@/components/ui-elements/Loader";
import { useAppContext } from "@/context/appContext";

function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  const { isAsideOpen } = useAppContext();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="select-none bg-background-secondary text-foreground">
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="relative flex flex-col gap-4 min-h-screen h-full">
          <Image
            className="fixed md:top-0 lg:-top-5 left-1/2 -translate-x-1/2 -z-0 w-full h-full object-contain"
            src={"/images/bgProps/blob-haikei.svg"}
            alt="background prop"
            width={2000}
            height={2000}
          />
          <AdminNavigation />
          <div className="md:fixed w-full md:gap-4 h-full flex z-0 px-4">
            <Aside />
            <main
              className={`${
                isAsideOpen
                  ? "md:relative fixed left-0 px-4 md:px-0"
                  : "relative"
              } md:pt-24 h-full w-full no-scrollbar overflow-y-auto`}>
              {children}
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default RootLayout;
