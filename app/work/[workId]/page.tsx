export default async function WorkInfo({
  params,
}: {
  params: Promise<{ workId: string }>;
}) {
  const workId = (await params).workId;
  return <div>Work Info for {workId}</div>;
}
