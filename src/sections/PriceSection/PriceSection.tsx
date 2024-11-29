import styles from "./PriceSection.module.scss";

const PriceSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.mainBox}>
        <div className={styles.title}>ТУТ ДОЛЖНА БЫТЬ СТОИМОСТЬ НАШЕЙ РАБОТЫ, НО...</div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <p className={styles.paragraph}>
              ...называть точную стоимость без составленного брифа и сбора информации по проекту — непрофессионально.
            </p>
            <p className={styles.paragraph}>
              Мы предлагаем сначала встретиться или созвониться, чтобы узнать всю необходимую информацию о задаче и
              нюансах, а после предложить несколько вариантов (по качеству и стоимости) на выбор.
            </p>
          </div>
          <div className={styles.contentBox}>
            <p className={styles.paragraph}>
              Или можно пойти от обратного. Если у вас есть конкретный бюджет, в который нужно уложиться, мы можем
              разработать вариант в рамках данной суммы.
            </p>
            <button className={styles.callUsButton}>Связаться с нами</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
