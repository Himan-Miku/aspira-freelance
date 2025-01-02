import { projectsInfo } from "@/utils";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-x-7 gap-y-10 w-10/12 place-items-center">
      {projectsInfo.map((p) => {
        return (
          <ProjectCard
            key={p.id}
            id={p.id}
            thumbnail={p.thumbnail}
            title={p.title}
            description={p.description}
            tags={p.tags}
          />
        );
      })}
    </div>
  );
};

export default Projects;
