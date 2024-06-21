export default async function getTaskById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: "no-store",
  });
  const task = await res.json();

  return task;
}
