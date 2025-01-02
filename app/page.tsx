import FAQs from "@/components/FAQs";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaMagic } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center items-center flex-col min-h-[80vh] ">
        <div className="flex justify-center px-4 items-center border shadow-md p-1 rounded-3xl text-sm font-normal">
          <h3 className="font-jet-mono  text-neutral-500">
            Your go-to Team for Websites & Apps
          </h3>
        </div>

        <h1 className="text-6xl sm:text-6xl font-medium mt-2 leading-[68px] flex flex-col ">
          <p className=" text-center">We turn your ideas into</p>
          <p className="text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            unique software products
          </p>
        </h1>
        <div>
          <p className="text-neutral-600 text-center text-base font-light mt-4  max-w-[480px] ">
            From design and development to deployment, we create custom websites
            and apps that perfectly align with your vision.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <div className="flex flex-col ">
            <Button className="rounded-lg text-base font-normal bg-gray-950 shadow-xl">
              Book a call Now
              <MdKeyboardArrowRight width={20} height={20} />
            </Button>
            <p className="text-xs  text-neutral-500 text-center">
              Response within 12 hours
            </p>
          </div>
          <Button className="bg-white shadow-lg text-black hover:bg-white hover:text-neutral-700">
            View our work
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-9 items-center justify-center h-[300px]">
        <h2 className="font-medium text-4xl leading-[44px] text-center">
          Certified by Industry Leaders You Trust
        </h2>
        <div className="flex gap-14 ">
          <Image
            src="/companyLogo/google.png"
            alt="google"
            width={54}
            height={55}
          />
          <Image
            src="/companyLogo/android.png"
            alt="android"
            width={60}
            height={60}
          />
          <Image src="/companyLogo/aws.png" alt="aws" width={89} height={54} />
          <Image
            src="/companyLogo/meta-icon.png"
            alt="Meta"
            width={80}
            height={54}
          />
          <Image
            src="/companyLogo/googlecloud.png"
            alt="googlecloud"
            width={68}
            height={54}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center mt-20">
        <p className="flex gap-2 items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
          <MdOutlineReportGmailerrorred className="text-red-700" /> The Problems
        </p>
        <h2 className="font-medium text-4xl leading-[44px] text-center ">
          We provide solutions for Your Most Pressing Digital Issues
        </h2>
        <div className="grid grid-cols-1 md:h-[220px] justify-center   text-xl  lg:text-2xl  max-w-[1150px] gap-6 md:grid-cols-3   mt-10  border-[#FEE9EA] border-[5px] rounded-3xl m-1 p-1">
          <div className="flex   ">
            <div className="mx-4  mt-6 flex flex-col   ">
              <Image
                src="/home/problem2.png"
                alt="problem2"
                width={34}
                height={34}
              ></Image>
              <p>Need visually stunning and user-friendly websites and apps</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-[1px]  bg-[#FEE9EA] hidden md:block"
            />
          </div>

          <div className="flex ">
            <div className="mx-4  mt-6 gap-4 flex flex-col m-1  ">
              <Image
                src="/home/problem1.png"
                alt="problem1"
                width={34}
                height={34}
              ></Image>
              <p>Looking for a skilled team to outsource your projects</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-[1px] bg-[#FEE9EA] hidden md:block"
            />
          </div>

          <div className="flex flex-col  gap-3  p-4 m-1  ">
            <Image
              src="/home/problem3.png"
              alt="problem3"
              width={34}
              height={34}
            ></Image>
            <p>Want end-to-end support from development to deployment</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center mt-32">
        <p className="flex gap-2 items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
          <FaMagic className="" /> Our Solutions
        </p>
        <h2 className="font-medium text-4xl leading-[44px] text-center w-[600px]">
          Effective Solutions to Overcome Your Digital Roadblocks{" "}
        </h2>
        <Solutions />
      </div>
      <div className="flex bg-[#F7F7F7] justify-between items-center mt-20 lg:mx-32 md:mx-24 mx-16">
        <div className="flex flex-col justify-start items-start gap-4 p-10 ">
          <h2 className="text-[28px] leading-[24px] font-medium text-left">
            Want to see our previous work?{" "}
          </h2>
          <p className="text-lg text-neutral-500">
            Explore our diverse portfolio of design and development projects.
          </p>
        </div>
        <div className="mr-10 p-5">
          <Button className="bg-white shadow-lg text-lg text-black hover:bg-white hover:text-neutral-700">
            View Our Work <MdKeyboardArrowRight width={20} height={20} />
          </Button>
        </div>
      </div>
      <Services />
      <FAQs />
    </main>
  );
}
