import styles from "./page.module.css";
import Tasks from "./tasks/components/tasks.js";
import getTasks from "./tasks/utils/getTasks.js";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="taskList">
          <h1>My todo list</h1>
          <Tasks tasks={tasks} />
        </div>
      </div>
    </main>
  );
}
