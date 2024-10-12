// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function BgAnimationGradient() {
//   const stripes = 20;
//   const animationDuration = 10;

//   return (
//     <div className="absolute inset-0 w-full h-full bg-gray-950 overflow-hidden">
//       <svg className="w-full h-full" preserveAspectRatio="none">
//         <defs>
//           <linearGradient
//             id="animated-gradient"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="0%"
//           >
//             <motion.stop
//               offset="0%"
//               stopColor="#0b0e18"
//               animate={{ stopColor: ["#0b0e18", "#11141f", "#0b0e18"] }}
//               transition={{
//                 duration: animationDuration,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.stop
//               offset="50%"
//               stopColor="#11141f"
//               animate={{ stopColor: ["#11141f", "#1c1f2a", "#11141f"] }}
//               transition={{
//                 duration: animationDuration,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.stop
//               offset="100%"
//               stopColor="#1c1f2a"
//               animate={{ stopColor: ["#1c1f2a", "#0b0e18", "#1c1f2a"] }}
//               transition={{
//                 duration: animationDuration,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           </linearGradient>
//         </defs>

//         {[...Array(stripes)].map((_, index) => (
//           <motion.rect
//             key={index}
//             x={`${(index / stripes) * 100}%`}
//             y="0"
//             width={`${100 / stripes}%`}
//             height="100%"
//             fill="url(#animated-gradient)"
//             initial={{ opacity: 0.5 + Math.random() * 0.5 }}
//             animate={{
//               opacity: [
//                 0.5 + Math.random() * 0.5,
//                 0.7 + Math.random() * 0.3,
//                 0.5 + Math.random() * 0.5,
//               ],
//             }}
//             transition={{
//               duration: animationDuration,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: Math.random() * animationDuration,
//             }}
//           />
//         ))}

//         {[...Array(5)].map((_, index) => (
//           <motion.line
//             key={`line-${index}`}
//             x1={`${((index + 1) / 6) * 100}%`}
//             y1="0"
//             x2={`${((index + 1) / 6) * 100}%`}
//             y2="100%"
//             stroke="#3b82f6"
//             strokeWidth="1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 0.7, 0] }}
//             transition={{
//               duration: animationDuration * 1.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: index * (animationDuration / 5),
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BgAnimationGradient() {
  const [stripes, setStripes] = useState(20); // Default to 20 stripes
  const animationDuration = 20;

  // Adjust number of stripes based on screen size
  useEffect(() => {
    const handleResize = () => {
      setStripes(window.innerWidth < 768 ? 8 : 20); // 8 stripes on mobile, 20 otherwise
    };

    handleResize(); // Call it on component mount
    window.addEventListener("resize", handleResize); // Listen to window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-gray-950 overflow-hidden">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="animated-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <motion.stop
              offset="0%"
              stopColor="#070b15"
              animate={{ stopColor: ["#070b15", "#191c26", "#070b15"] }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.stop
              offset="50%"
              stopColor="#11141e"
              animate={{ stopColor: ["#11141e", "#11141e", "#11141e"] }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.stop
              offset="100%"
              stopColor="#191c26"
              animate={{ stopColor: ["#191c26", "#070b15", "#191c26"] }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </linearGradient>
        </defs>

        {/* Stripes Animation */}
        {[...Array(stripes)].map((_, index) => (
          <motion.rect
            key={index}
            x={`${(index / stripes) * 100}%`}
            y="0"
            width={`${100 / stripes}%`}
            height="100%"
            fill="url(#animated-gradient)"
            initial={{ opacity: 0.5 + Math.random() * 0.5 }}
            animate={{
              opacity: [
                0.5 + Math.random() * 0.5,
                0.7 + Math.random() * 0.3,
                0.5 + Math.random() * 0.5,
              ],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * animationDuration,
            }}
          />
        ))}

        {/* Vertical Lines Animation */}
        {[...Array(5)].map((_, index) => (
          <motion.line
            key={`line-${index}`}
            x1={`${((index + 1) / 6) * 100}%`}
            y1="0"
            x2={`${((index + 1) / 6) * 100}%`}
            y2="100%"
            stroke="#3b82f6"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{
              duration: animationDuration * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * (animationDuration / 5),
            }}
          />
        ))}
      </svg>
    </div>
  );
}
