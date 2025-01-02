import Image from "next/image";
import Link from "next/link";
import LogoComponent from "./LogoComponent";

type WorkHeaderProps = {
  title: string;
  desc: string;
  tags: Array<string>;
  author: string;
  tech: Array<string>;
  timePeriod: string;
};

const WorkHeader = ({
  title,
  desc,
  tags,
  author,
  tech,
  timePeriod,
}: WorkHeaderProps) => {
  const technologies = tech.join(", ");
  return (
    <div className="flex flex-col gap-16 items-start justify-center">
      <div>
        <Link href={`/work`}>
          <div className="flex gap-[6px] justify-center items-center py-2 pl-4 pr-5 rounded-xl shadow-sm border border-gray-[#d8d8d8]">
            <div>
              <Image
                src={"/left-arrow.png"}
                alt="left-arrow"
                height={16}
                width={16}
              />
            </div>
            <div>
              <p className="text-base font-medium">Back to projects</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-5 items-start justify-center">
        <div className="text-[46px] font-medium">
          <p>{title}</p>
        </div>
        <div className="w-3/4">
          <p className="text-[#515151] text-xl">{desc}</p>
        </div>
        <div className="flex gap-3 items-center justify-start">
          {tags.map((t, i) => {
            return (
              <div
                key={i}
                className="py-1 px-3 bg-[#f2f2f2] rounded-full flex justify-center items-center"
              >
                <p className="text-[#595959] text-sm">{t}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full pt-8">
        <LogoComponent
          Imgsrc={`/gg_profile.svg`}
          title="Project By"
          content={author}
        />
        <LogoComponent
          Imgsrc={`/technology.svg`}
          title="Technologies"
          content={technologies}
        />
        <LogoComponent
          Imgsrc={`/outline_time.svg`}
          title="Time Period"
          content={timePeriod}
        />
      </div>
    </div>
  );
};

export default WorkHeader;
