import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";

const Solutions = () => {
  return (
    <div className="flex flex-col gap-4 mx-4 lg:mx-36 sm:m-12 m-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex  gap-4 ">
          <span className="text-4xl md:text-5xl font-medium lg:pt-[145px] ">
            1.
          </span>
          <div className="flex justify-center  flex-col">
            <div className="mb-6 relative font-medium">
              <div className="flex items-center justify-start gap-4">
                <h2 className="text-nowrap text-4xl md:text-5xl font-medium ">
                  We Design
                </h2>
                <div className="relative w-12 h-12">
                  <Image
                    src="/companyLogo/figma.png"
                    alt="Figma logo"
                    width={48}
                    height={48}
                    className="object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl ">Stunning</h2>
              </div>
              <h2 className="text-4xl md:text-5xl  mt-2">Websites and Apps</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We design visually appealing and intuitive websites and apps that
              reflect your brand's personality while ensuring exceptional user
              experience and performance.
            </p>
          </div>
        </div>
        <div className=" hidden lg:flex relative h-[500px]">
          <Image
            src="/Solutions/services1.png"
            alt="service1"
            fill={true}
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" hidden lg:flex relative h-[500px]">
          <Image
            src="/Solutions/services2.png"
            alt="service1"
            fill={true}
          ></Image>
        </div>
        <div className="flex  gap-4  lg:ml-7">
          <span className="text-4xl md:text-5xl font-medium text-end lg:pt-[145px] ">
            2.
          </span>
          <div className="flex flex-col justify-center ">
            <div className="mb-6 relative font-medium">
              <div className="flex items-center justify-start gap-4">
                <h2 className="text-nowrap text-4xl md:text-5xl font-medium ">
                  Outsource your projects to
                </h2>
              </div>
              <div className="flex items-center justify-start gap-4">
                <h2 className="text-4xl md:text-5xl  mt-2">our expert</h2>
                <div className="relative w-12 h-12">
                  <Image
                    src="/companyLogo/googlecloud.png"
                    alt="Figma logo"
                    width={48}
                    height={48}
                    className="object-cover rounded-xl mt-2"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl  mt-2">team</h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expert team is ready to handle your projects with precision,
              delivering high-quality solutions on time. We become an extension
              of your team, ensuring seamless collaboration.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex  gap-4 ">
          <span className="text-4xl lg:pt-[145px] md:text-5xl font-medium text-end ">
            3.
          </span>
          <div className="flex justify-center  flex-col">
            <div className="mb-6 relative font-medium">
              <div className="flex items-center justify-start gap-4">
                <h2 className="text-nowrap text-4xl md:text-5xl font-medium ">
                  Full Development
                </h2>
                <div className="relative w-12 h-12">
                  <FaReact className=" rounded-xl mt-2 w-10 h-10 text-blue-300" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl  mt-2">Lifecycle Support</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expert team is ready to handle your projects with precision,
              delivering high-quality solutions on time. We become an extension
              of your team, ensuring seamless collaboration.
            </p>
          </div>
        </div>
        <div className=" hidden lg:flex relative h-[500px]">
          <Image
            src="/Solutions/services3.png"
            alt="service1"
            fill={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
