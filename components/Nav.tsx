import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Navlinks from "./nav-links";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

const Nav = () => {
  return (
    <div className="sticky  mx-4 md:mx-28 m-1 p-1 top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center font-onest-sans font-medium h-16">
      <div className="flex items-center justify-center gap-3">
        <Image
          src="/logo.png"
          alt="logo"
          width={32}
          height={32}
          className=" h-8 w-8"
        />
        <p>Doraemon</p>
      </div>
      <Navlinks />
      <div>
        <Link href="https://cal.com/vineet-babar">
          <Button className="bg-white text-black hover:bg-black  hover:text-white transition-colors p-2 px-3 shadow-md">
            Book a call
            <MdKeyboardArrowRight width={20} height={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
