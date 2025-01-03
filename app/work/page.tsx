import { HeroWork, Projects } from "./components";

const WorkPage = () => {
  return (
    <main className="my-16 flex flex-col items-center justify-center gap-14">
      <HeroWork />
      <Projects />
    </main>
  );
};

export default WorkPage;
