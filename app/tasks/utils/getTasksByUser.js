export default async function getTasksByUser(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
      {
        cache: "no-store",
      }
    );
    const tasks = await res.json();

    return tasks;
  } catch (error) {
    error;
  }
}
