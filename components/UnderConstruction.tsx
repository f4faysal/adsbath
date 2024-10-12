"use client";

import { Hammer } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

// Dynamically import OdometerText component with ssr: false
const OdometerText = dynamic(() => import("@/components/odometer-text"), {
  ssr: false,
});

export default function UnderConstruction() {
  const [rotated, setRotated] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotated((prev) => !prev);
    }, 500); // 800 milliseconds = 0.8 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  useEffect(() => {
    // const targetDate = new Date("2024-12-31T23:59:59Z").getTime();

    const targetDate = new Date("2024-07-18T00:00:00Z").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval); // Cleanup the interval
  }, []);

  return (
    <div className="h-screen">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <Hammer
          size={72}
          className={`transition-transform duration-1000 ${
            rotated
              ? "origin-bottom-left rotate-45"
              : "origin-bottom-left rotate-0"
          }`}
        />

        <h1 className="text-4xl font-bold leading-tight">
          Under Construction 🚧
        </h1>
        <p className="text-center text-muted-foreground">
          Our new page is currently being built. <br />
          Exciting updates are on the way for{" "}
          <Link href="/adsbath" className="font-bold hover:border-b">
            Adsbath!
          </Link>
        </p>

        <div className="flex items-center justify-center space-x-2">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              <OdometerText
                value={timeLeft.days}
                className="text-4xl font-bold text-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="text-gray-600 dark:text-gray-400">Days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              <OdometerText
                value={timeLeft.hours}
                className="text-4xl font-bold text-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="text-gray-600 dark:text-gray-400">Hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              <OdometerText
                value={timeLeft.minutes}
                className="text-4xl font-bold text-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="text-gray-600 dark:text-gray-400">Minutes</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              <OdometerText
                value={timeLeft.seconds}
                className="text-4xl font-bold text-gray-800 dark:text-gray-200"
              />
              {/* {timeLeft.seconds} */}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}




// layout 

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "AdsBath",
//   description: " 🚧 Under Construction 🚧",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//!         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css"
//         />
//!        <link
//           rel="stylesheet"
//           href="https://github.hubspot.com/odometer/themes/odometer-theme-minimal.css"
//         />
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
