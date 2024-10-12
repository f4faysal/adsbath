"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

const NavMenu = ({
  className,
  mobile = false,
  onClick,
}: {
  className?: string;
  mobile?: boolean;
  onClick?: () => void;
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuItems = [
    "Home",
    {
      name: "Service",
      subItems: [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
      ],
    },
    "Portfolio",
    "Blog",
    "About Us",
    "Contact Us",
  ];

  return (
    <motion.div
      className={cn(
        "flex items-center",
        mobile ? "flex-col items-center gap-8" : "gap-9",
        className
      )}
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -20 },
      }}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={typeof item === "string" ? item : item.name}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: -20 },
          }}
          transition={{ delay: index * 0.1 }}
          className={cn(mobile ? "text-2xl" : "text-base")}
        >
          {typeof item === "string" ? (
            <Link
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className="font-semibold hover:text-blue-400 transition-all duration-300"
              onClick={onClick}
            >
              {item}
            </Link>
          ) : (
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="font-semibold hover:text-[#fd0778] transition-all duration-300 flex items-center gap-1"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.name ? null : item.name
                  )
                }
              >
                {item.name} <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={cn(
                      "absolute left-0 mt-2 py-2 bg-[#080c16] ",
                      mobile ? "relative mt-4" : "w-56 p-2"
                    )}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`/service/${subItem
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="block px-4 py-2 text-sm text-[#fff] hover:bg-[#fd0778] hover:text-white transition-colors duration-200"
                        onClick={onClick}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

const Navbar = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navVariants = {
    top: {
      backgroundColor: "rgba(4, 7, 16, 0)",
      backdropFilter: "blur(0px)",
      height: "100px",
    },
    scrolled: {
      backgroundColor: "rgba(4, 7, 16, 0.8)",
      backdropFilter: "blur(10px)",
      height: "70px",
    },
  };

  return (
    <motion.nav
      className={cn("fixed top-0 left-0 right-0 z-[500]", className)}
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      variants={navVariants}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <div className="container mx-auto h-full flex justify-between items-center">
        <Link href="/">
          <motion.div
            animate={{
              height: isScrolled ? "40px" : "77px",
              width: isScrolled ? "46px" : "89px",
            }}
            transition={{ duration: 0.3 }}
            className="relative h-[40px] w-[46px] lg:h-[77px] lg:w-[89px]"
          >
            <Image
              className="cursor-pointer object-contain"
              src="/adsbath-logo.png"
              alt="Logo"
              fill
            />
          </motion.div>
        </Link>
        <div className="flex items-center lg:gap-10 gap-3 justify-between">
          <NavMenu className="hidden lg:flex" />

          <motion.button
            className="uppercase px-6 lg:px-10 py-2 lg:py-3 rounded-md text-xs text-white relative overflow-hidden group hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              height: isScrolled ? "39px" : "52px",
              fontSize: isScrolled ? "12px" : "12px",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10 ">get free consultation</span>
            <motion.div
              className="absolute inset-0"
              initial={{
                background: "linear-gradient(90deg, #1A43A3 0%, #E025CE 100%)",
              }}
              whileHover={{
                background: "linear-gradient(90deg, #E025CE 0%, #1A43A3 100%)",
                boxShadow: "0 0 20px #E025CE, 0 0 40px #1A43A3",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-[#040710] bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center gap-10 h-screen"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 focus:outline-none"
            >
              <X className="h-8 w-8 text-white" />
            </motion.button>
            <NavMenu mobile onClick={() => setIsMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
