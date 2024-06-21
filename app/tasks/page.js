import Task from "./task.js";
import getTasks from "./getTasks.js";
import Link from "next/link.js";

export const metadata = {
  title: "My awesome todo list app",
  description:
    "See everyone's TODOs and select one to see the details of a specific one",
};

export default async function Tasks({ userTasks }) {
  const tasks = userTasks || (await getTasks());

  return (
    <>
      {tasks == userTasks ? <Link href={"/"}>See all tasks</Link> : ""}
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
