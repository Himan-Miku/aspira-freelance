import Link from "next/link";
import Image from "next/image";

type CustomButtonProps = {
  linkSrc: string;
  btnText: string;
  bgColor: string;
  textColor: string;
};

const CustomButton = ({
  linkSrc,
  btnText,
  bgColor,
  textColor,
}: CustomButtonProps) => {
  return (
    <Link href={linkSrc} target="_blank">
      <div
        className={`flex items-center justify-center py-[10px] pl-5 pr-4 rounded-xl shadow-2xl gap-1 ${bgColor}`}
      >
        <div>
          <button className={textColor}>{btnText}</button>
        </div>
        <Image
          width={16}
          height={16}
          src={`/right-arrow.svg`}
          alt="right-arrow"
        />
      </div>
    </Link>
  );
};

export default CustomButton;
