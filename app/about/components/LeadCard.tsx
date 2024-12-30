import Image from "next/image";
import Link from "next/link";

type LeadCardProps = {
  name: string;
  desc: string;
  title: string;
  imageSrc: string;
  linkedIn: string;
};

const LeadCard = ({ name, title, desc, imageSrc, linkedIn }: LeadCardProps) => {
  return (
    <div className="flex gap-6 items-center justify-center">
      <div className="w-1/3 h-full">
        <Image
          className="aspect-square rounded-lg w-full"
          src={imageSrc}
          height={128}
          width={128}
          alt="lead_pic"
        />
      </div>
      <div className="flex flex-col gap-3 justify-center items-start self-start w-2/3">
        <div className="flex flex-col gap-0 justify-center items-start">
          <div className="l-name">
            <p className="text-base font-medium">{name}</p>
          </div>
          <div className="l-title">
            <p className="text-xs text-[#515151]">{title}</p>
          </div>
        </div>
        <div className="l-description">
          <p>{desc}</p>
        </div>
        <div className="l-linkedIn-btn flex items-start justify-start">
          <Link href={linkedIn} target="_blank">
            <div className="flex items-center justify-center py-2 px-[17px] rounded-xl border border-[#e2e2e2] max-w-fit">
              <p className="text-sm">View LinkedIn</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
