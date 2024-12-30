import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const AboutFooter = () => {
  return (
    <div className="flex justify-between items-center w-9/12 bg-[#f7f7f7] rounded-[1.25rem] p-10 mb-10">
      <div className="flex flex-col items-start justify-center gap-2">
        <div>
          <p className="text-2xl font-medium">
            Want to see our previous work?{" "}
          </p>
        </div>
        <div>
          <p className="font-light text-sm">
            Explore our diverse portfolio of design and development projects.
          </p>
        </div>
      </div>
      <div>
        <CustomButton
          btnText="View Our Work"
          bgColor="bg-white"
          linkSrc="/work"
          textColor="text-[#292929]"
        />
      </div>
    </div>
  );
};

export default AboutFooter;
