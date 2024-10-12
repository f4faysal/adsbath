import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PartnerLogoProps {
  src: string;
  alt: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt }) => {
  return (
    <motion.div
      className="relative w-24 h-24 md:w-32 md:h-32"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className="filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </motion.div>
  );
};

export default PartnerLogo;
