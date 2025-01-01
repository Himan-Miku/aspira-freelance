import { projectsInfo } from "@/utils";
import WorkHeader from "./components/WorkHeader";
import WorkImage from "./components/WorkImage";
import GeneralPoints from "./components/GeneralPoints";

export default async function WorkInfo({
  params,
}: {
  params: Promise<{ workId: string }>;
}) {
  const workId = (await params).workId;

  const project = projectsInfo.find(
    (project) => project.id === parseInt(workId as string, 10)
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  const imgSrc = project.images[0];

  return (
    <main className="mt-16 flex flex-col items-center justify-center gap-32 px-64">
      <WorkHeader
        title={project.title}
        desc={project.description}
        tags={project.tags}
        author={project.author}
        tech={project.tech}
        timePeriod={project.timeRequired}
      />
      <WorkImage imgSrc={imgSrc} />
      <GeneralPoints generals={project.problems} mainHeading="Problems :" />
      <GeneralPoints generals={project.keyFeat} mainHeading="Key Features :" />
      <GeneralPoints generals={project.approaches} mainHeading="Approaches :" />
    </main>
  );
}
