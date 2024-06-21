export default async function getTasks() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    cache: "no-store",
  });
  const tasks = await res.json();

  return tasks;
}
