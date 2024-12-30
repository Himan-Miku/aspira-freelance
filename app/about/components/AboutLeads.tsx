import Image from "next/image";
import LeadCard from "./LeadCard";
import { teamLeadInfo } from "@/utils";

const AboutLeads = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col justify-center items-center self-stretch gap-5">
        <div className="who-we-are">
          <div className="rounded-xl border-[#e3e3e3] border border-b-2 px-3 py-1 text-sm text-center flex gap-2 items-center justify-center">
            <Image
              height={16}
              width={16}
              src={`/team-leads-badge.svg`}
              alt="badge"
            />
            <p>Team Leads</p>
          </div>
        </div>
        <div className="about-heading w-[800px]">
          <h1 className="text-center text-[26px] font-semibold leading-[3rem]">
            Your Dedicated Team of Specialists in Every Field
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-16 w-8/12">
        {teamLeadInfo.map((l) => {
          return (
            <LeadCard
              key={l.id}
              name={l.name}
              title={l.title}
              desc={l.desc}
              linkedIn={l.linkedInSrc}
              imageSrc={l.profilePicSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutLeads;
