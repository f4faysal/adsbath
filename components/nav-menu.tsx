import { cn } from "@/lib/utils";
import Link from "next/link";

const NavMenu = ({ className }: any) => {
  return (
    <div className={cn("flex items-center gap-9", className)}>
      <Link
        href="/"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        Home
      </Link>
      <Link
        href="/#service"
        className="cursor-pointer text-base  hover:border-b-[3px] border-blue-500"
      >
        Service
      </Link>
      <Link
        href="/#portfolio"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500 "
      >
        Portfolio
      </Link>
      <Link
        href="/#blog"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        Blog
      </Link>
      <Link
        href="/#about-us"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        About Us
      </Link>
      <Link
        href="/#contact-us"
        className="cursor-pointer text-base hover:border-b-[3px] border-blue-500"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NavMenu;
