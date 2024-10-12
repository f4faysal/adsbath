import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const NavMenu = ({ className }: any) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <div className={cn("flex items-center gap-9", className)}>
      <Link
        href="/"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        Home
      </Link>
      <div className="relative">
        <button
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
          className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
        >
          Services
        </button>
        {showServicesDropdown && (
          <div
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link href="/service/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Web Development
              </Link>
              <Link href="/service/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Mobile Development
              </Link>
              <Link href="/service/ui-ux-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                UI/UX Design
              </Link>
            </div>
          </div>
        )}
      </div>
      <Link
        href="/portfolio"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500 "
      >
        Portfolio
      </Link>
      <Link
        href="/blog"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        Blog
      </Link>
      <Link
        href="/about-us"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        About Us
      </Link>
      <Link
        href="/contact-us"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NavMenu;
