import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.titleBox}>
        <div className={styles.logo} />
        <p className={styles.subTitle}>
          Делаем коммерческие
          <br />
          видео с душой
        </p>
        <button className={styles.callUsButton}>Связаться с нами</button>
      </div>
    </div>
  );
};

export default HeroSection;
