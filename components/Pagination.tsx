import React from "react";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-8">
    {Array.from({ length: totalPages }, (_, i) => (
      <motion.button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === i + 1
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white"
        } transition-colors duration-300`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {i + 1}
      </motion.button>
    ))}
  </div>
);

export default Pagination;
