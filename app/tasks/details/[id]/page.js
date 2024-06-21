import Link from "next/link";

export const metadata = {
  title: "My awesome todo task",
  description:
    "See details of a specific TODO. You're also able to see all TODOs from a specific user",
};

async function getTask(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: "no-store",
  });
  const task = await res.json();

  return task;
}

export default async function Task({ params }) {
  const { id } = params;
  const task = await getTask(id);

  return (
    <div>
      <h2>{task.title}</h2>
      <p>ID : {task.id}</p>
      <p>Status : {task.completed ? "✔️" : "❌"}</p>
      <br />
      <Link href={`/tasks/user/${task.userId}`}>
        See all this user&apos;s tasks →
      </Link>
      <Link href={`/`}>See all tasks →</Link>
    </div>
  );
}
