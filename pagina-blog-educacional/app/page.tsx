import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.fixedHeader}>
        <h1 className={styles.titulo}>blog educacional</h1>
      </header>

      <main className={styles.content}>
        {/* depois o conteúdo vai aqui */}
      </main>
    </>
  );
}
