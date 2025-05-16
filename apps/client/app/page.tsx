import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Привет, участник проекта!</h1>
        <p className={styles.description}>
          Добро пожаловать в нашу командную работу
        </p>
      </main>
    </div>
  );
}
