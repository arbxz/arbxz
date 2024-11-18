"use client";

import { useEffect, useState } from "react";

const ClockClient = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);

  const tick = () => {
    setTime(new Date());
  };

  const formattedTime = (currTime: Date) =>
    currTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  useEffect(() => {
    setMounted(true); // Set mounted to true when the component mounts
    const timerID = setInterval(() => tick(), 60000);

    // Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div suppressHydrationWarning={true} className="w-full uppercase">
      {mounted && time && <h2>{formattedTime(time)}</h2>}
    </div>
  );
};

export default ClockClient;
