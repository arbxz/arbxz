import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 60000);

    // Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const tick = () => {
    setTime(new Date());
  };

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div suppressHydrationWarning={true} className="w-full">
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default Clock;
