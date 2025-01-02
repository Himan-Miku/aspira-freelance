import Image from "next/image";

const WorkImage = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="w-full">
      <Image src={imgSrc} alt="main-img" height={720} width={1080} />
    </div>
  );
};

export default WorkImage;
