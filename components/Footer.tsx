import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Navlinks from "./nav-links";
import { MdKeyboardArrowRight } from "react-icons/md";
import CallButtton from "./CallButtton";
import { MailIcon } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="sticky   px-4 md:px-28 my-10 p-2 top-0 z-50  border-y bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center font-onest-sans font-medium h-24">
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
      <div className="flex items-center justify-center gap-3">
        <Link href="mailto:aspira@gmail.com" className="flex  items-center">
          <IoMdMail />
          <p>aspira@gmail.com</p>
        </Link>
        <Separator orientation="vertical" className="h-6 w-[2px]" />
        <CallButtton />
      </div>
    </div>
  );
};

export default Footer;
