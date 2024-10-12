import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  id: number;
  name: string;
  url: string;
  description: string;
  variants: any;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ id, name, url, description, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { duration: 0.3 },
    }}
    className="w-full rounded-2xl bg-[#100C1D] p-8 z-10 transition-all duration-300 shadow-md"
  >
    <Image
      width={1000}
      height={1000}
      priority
      className="h-[253px] w-full rounded-lg object-cover"
      src={url}
      alt={name}
    />

    <h1 className="text-lg font-bold pt-4">{name}</h1>
    <p className="text-sm text-gray-400 mt-2">{description}</p>
    <Link
      href={`/case-studies/${id}`}
      className="mt-4 inline-block text-blue-500 hover:text-blue-600 transition-colors duration-300"
    >
      Read Case Study
    </Link>
  </motion.div>
);

export default CaseStudyCard;
