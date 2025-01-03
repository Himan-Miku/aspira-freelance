import React from "react";

const HeroWork = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center self-stretch gap-5 m-1 md:m-5">
        <div className="who-we-are">
          <div className="rounded-xl border-[#e3e3e3] border border-b-2 px-3 text-neutral-500 py-1 font-jet-mono text-sm text-center">
            <p>Explore some of our work</p>
          </div>
        </div>
        <div className="about-heading max-w-[890px]">
          <h1 className="text-center text-6xl tracking-[-2%] font-medium leading-[68px]">
            Browse Through Our Work and See What We Can Do
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroWork;
