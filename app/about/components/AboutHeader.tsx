import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const AboutHeader = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-16">
      <div className="flex flex-col justify-center items-center self-stretch gap-5">
        <div className="who-we-are">
          <div className="rounded-xl border-[#e3e3e3] border border-b-2 px-3 py-1 text-sm text-center">
            <p>Who we are?</p>
          </div>
        </div>
        <div className="about-heading w-[800px]">
          <h1 className="text-center text-[46px] font-semibold leading-[3rem]">
            Driven by the Love for building software that truly stands out
          </h1>
        </div>
      </div>
      <div className="flex justify-between flex-col items-center gap-11">
        <div className="beliefs">
          <div className="text-start py-2">
            <h3 className="text-xl">We believe in following : </h3>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div className="flex gap-3 items-center self-stretch">
              <div className="flex h-10 w-10 p-[10px] justify-center items-center rounded-xl bg-[#f7f7f7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625Z"
                    fill="#919191"
                  />
                </svg>
              </div>
              <div className="text-base">
                <p>
                  Understanding our clients’ vision and bringing it to life with
                  creativity and passion.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center self-stretch">
              <div className="flex h-10 w-10 p-[10px] justify-center items-center rounded-xl bg-[#f7f7f7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625Z"
                    fill="#919191"
                  />
                </svg>
              </div>
              <div className="text-base">
                <p>
                  Building great software through collaboration, innovation, and
                  a focus on solving real problems.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center self-stretch">
              <div className="flex h-10 w-10 p-[10px] justify-center items-center rounded-xl bg-[#f7f7f7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625Z"
                    fill="#919191"
                  />
                </svg>
              </div>
              <div className="text-base">
                <p>
                  Seeing every project as more than development — it’s about
                  creating something that truly matters.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center self-stretch">
              <div className="flex h-10 w-10 p-[10px] justify-center items-center rounded-xl bg-[#f7f7f7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.5625C8.70206 16.5625 7.43327 16.1776 6.35407 15.4565C5.27488 14.7354 4.43374 13.7105 3.93704 12.5114C3.44034 11.3122 3.31038 9.99272 3.5636 8.71972C3.81682 7.44672 4.44183 6.27739 5.35962 5.35961C6.2774 4.44183 7.44672 3.81681 8.71972 3.5636C9.99272 3.31038 11.3122 3.44034 12.5114 3.93704C13.7105 4.43374 14.7354 5.27487 15.4565 6.35407C16.1776 7.43327 16.5625 8.70206 16.5625 10C16.5606 11.7399 15.8686 13.408 14.6383 14.6383C13.408 15.8686 11.7399 16.5606 10 16.5625Z"
                    fill="#919191"
                  />
                </svg>
              </div>
              <div className="text-base">
                <p>
                  Crafting products that are functional and beautiful, blending
                  design with development precision.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CustomButton
          linkSrc="https://cal.com/vineet-babar"
          btnText="Book a Call Now"
          bgColor="bg-[#272a2e]"
          textColor="text-white"
          targetTab="_blank"
        />
      </div>
    </div>
  );
};

export default AboutHeader;
