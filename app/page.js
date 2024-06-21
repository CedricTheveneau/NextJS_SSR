import styles from "./page.module.css";
import Tasks from "./tasks/page.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="taskList">
          <h1>My todo list</h1>
          <Tasks />
        </div>
      </div>
    </main>
  );
}
