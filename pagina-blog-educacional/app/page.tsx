import styles from "./page.module.css";

export default function Home() {
  return (
    <body id={styles.padrao}>
      <main>
        <header className={styles.header}>
          Portfólio Educacional
        </header>

        <section className={styles.author}>
          <h2>André Felipe</h2>
        </section>

        <div className={styles.divider} />
      </main>
    </body>
  );
}
