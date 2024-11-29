import { FavouriteIcon, FolderVideoIcon, GlobalEditingIcon, ShoppingBasket03Icon, StarFaceIcon } from "hugeicons-react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Card from "./Card/Card";
import styles from "./WorkValueSection.module.scss";

const WorkValueSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>ЦЕННОСТЬ И ПОЛЬЗА ОТ НАШЕЙ РАБОТЫ УТИЛИТАРНЫ</div>

      <div className={styles.content}>
        <ContentWrapper className={styles.contentBox}>
          <p className={styles.subTitle}>
            ...мы знаем, что создание видео - <span className={styles.boldText}>цель, а не средство</span>
          </p>
          <div className={styles.table}>
            <div className={styles.firstCol}>
              <Card
                icon={<ShoppingBasket03Icon className={styles.icon} color={"#fff"} strokeWidth={1} />}
                text="повышение конверсии, продажа товаров и услуг"
              />
              <Card
                icon={<FavouriteIcon className={styles.icon} color={"#fff"} strokeWidth={1} />}
                text="создание эмоций, передача атмосферы"
              />
              <Card
                icon={<GlobalEditingIcon className={styles.icon} color={"#fff"} strokeWidth={1} />}
                text="обучение, объяснение сложного простым языком"
              />
            </div>
            <div className={styles.image} />
            <div className={styles.secondCol}>
              <Card
                icon={<FolderVideoIcon className={styles.icon} color={"#fff"} strokeWidth={1} />}
                text="создание важных моментов и событий"
                className={styles.card_1}
              />
              <Card
                icon={<StarFaceIcon className={styles.icon} color={"#fff"} strokeWidth={1} />}
                text="увеличение узнаваемости, бренда. Формирование лояльной аудитории"
                className={styles.card_2}
              />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default WorkValueSection;
