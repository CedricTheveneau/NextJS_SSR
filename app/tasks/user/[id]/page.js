import Link from "next/link.js";
import Tasks from "../../components/tasks.js";
import getTasksByUser from "../../utils/getTasksByUser.js";

export async function generateMetadata({ params }) {
  const tasks = await getTasksByUser(params.id);
  const taskNum = tasks.length;
  return {
    title: `${params.id}'s tasks | ${taskNum}`,
    description: `Discover all ${taskNum} ${params.id}'s tasks`,
  };
}

export default async function UserTask({ params }) {
  const { id } = params;
  const userTasks = await getTasksByUser(id);
  return (
    <>
      <Link href={"/"}>See all tasks →</Link>
      <br />
      <br />
      <Tasks tasks={userTasks} />
    </>
  );
}
