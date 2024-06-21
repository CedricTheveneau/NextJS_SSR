export default async function getTaskById(id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        cache: "no-store",
      }
    );
    const task = await res.json();

    return task;
  } catch (error) {
    console.log(error);
  }
}
