import Tasks from "../../page.js";

async function getTasksByUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    {
      cache: "no-store",
    }
  );
  const tasks = await res.json();

  return tasks;
}

export default async function UserTask({ params }) {
  const { id } = params;
  const userTasks = await getTasksByUser(id);
  return <Tasks userTasks={userTasks} />;
}
