import CustomButton from "@/app/about/components/CustomButton";
import Image from "next/image";

type projectCardProps = {
  id: number;
  thumbnail: string;
  tags: Array<string>;
  title: string;
  description: string;
};

const ProjectCard = ({
  thumbnail,
  tags,
  title,
  description,
  id,
}: projectCardProps) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-center w-3/4">
      <div className="p-image rounded-[26px] bg-[#f7f7f7] overflow-hidden">
        <Image
          src={thumbnail}
          alt="thumbnail-project"
          height={250}
          width={500}
        />
      </div>
      <div className="p-summary flex flex-col gap-4">
        <div className="p-tags flex gap-3">
          {tags.map((t, i) => {
            return (
              <div key={i} className="py-1 px-3 bg-[#f2f2f2] rounded-full">
                <p className="text-xs font-light text-[#595959]">{t}</p>
              </div>
            );
          })}
        </div>
        <div className="p-info flex justify-between items-center">
          <div className="flex flex-col gap-1 text-start">
            <div className="p-title">
              <p className="font-medium text-lg">{title}</p>
            </div>
            <div className="p-desc">
              <p className="text-[#515151] text-sm">{description}</p>
            </div>
          </div>
          <div className="p-view">
            <CustomButton
              bgColor="bg-white"
              btnText="View"
              linkSrc={`/work/${id}`}
              targetTab="_self"
              textColor="text-[#292929]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
