import styles from "./ShowReelSection.module.scss";

const ShowReelSection = () => {
  return (
    <section className={styles.showReelSection}>
      <div className={styles.textBox}>
        <div className={styles.title}>Наш Showreel</div>
        <div className={styles.description}>
          <strong>Showreel</strong> — это сборник из разных видео в одном видеоролике. Он демонстрирует уровень качества
          наших работ вне зависимости от жанра.
        </div>
      </div>
      <div className={styles.showReel}></div>
    </section>
  );
};

export default ShowReelSection;
