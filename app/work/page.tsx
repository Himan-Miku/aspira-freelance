import { HeroWork, Projects } from "./components";

const WorkPage = () => {
  return (
    <main className="md:mt-16 mt-10 flex flex-col items-center justify-center md:gap-14 gap-10">
      <HeroWork />
      <Projects />
    </main>
  );
};

export default WorkPage;
