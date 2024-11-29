import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import styles from "./FullCycleSection.module.scss";
import ItemCard from "./ItemCard/ItemCard";

const FullCycleSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        МЫ - <strong>ВИДЕОПРОДАКШН</strong> ПОЛНОГО ЦИКЛА
      </div>
      <div className={styles.image} />
      <div className={styles.content}>
        <div className={styles.firstRow}>
          <ContentWrapper className={styles.contentBox}>
            <ItemCard
              number={1}
              points={["Заполняем бриф", "Разрабатываем концепт", "Пишем сценарий", "составляем смету"]}
            />
          </ContentWrapper>
          <ContentWrapper className={styles.contentBox}>
            <ItemCard
              number={2}
              points={["Ищем локации", "Покупаем реквизит", "нанимаем актеров", "Строим декорации"]}
            />
          </ContentWrapper>
        </div>
        <div className={styles.secondRow}>
          <ContentWrapper className={styles.contentBox}>
            <ItemCard number={3} points={["Выставляем свет", "Режиссируем", "Снимаем", "Записываем звук"]} />
          </ContentWrapper>
          <ContentWrapper className={styles.contentBox}>
            <ItemCard
              number={4}
              points={["Монтируем", "Обрабатываем звук", "Создаем графику и эффекты", "делаем цветокоррекцию"]}
            />
          </ContentWrapper>
        </div>
      </div>
    </section>
  );
};

export default FullCycleSection;
