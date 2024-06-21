import Link from "next/link";

export default function Task({ task }) {
  return (
    <Link href={`/tasks/details/${task.id}`}>
      <li key={task.id}>
        {task.title} {task.completed ? "✔️" : "❌"}
      </li>
    </Link>
  );
}
