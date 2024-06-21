import Link from "next/link";
import getTaskById from "../../utils/getTaskById";

export async function generateMetadata({ params }) {
  const task = await getTaskById(params.id);
  return {
    title: task.title,
    description: `${task.title} - ${task.id} | ${task.userId}`,
  };
}

export default async function Task({ params }) {
  const { id } = params;
  const task = await getTaskById(id);

  return (
    <div>
      <h2>{task.title}</h2>
      <p>ID : {task.id}</p>
      <p>Status : {task.completed ? "✔️" : "❌"}</p>
      <br />
      <br />
      <Link href={`/tasks/user/${task.userId}`}>
        See all this user&apos;s tasks →
      </Link>
      <br />
      <br />
      <Link href={`/`}>See all tasks →</Link>
    </div>
  );
}
