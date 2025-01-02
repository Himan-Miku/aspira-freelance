import { HeroWork, Projects } from "./components";

const WorkPage = () => {
  return (
    <main className="mt-16 flex flex-col items-center justify-center gap-32">
      <HeroWork />
      <Projects />
    </main>
  );
};

export default WorkPage;
