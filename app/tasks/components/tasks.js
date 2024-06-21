import Task from "./task.js";

export const metadata = {
  title: "My awesome todo list app",
  description:
    "See everyone's TODOs and select one to see the details of a specific one",
};

export default async function Tasks({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
