import {
  Calculator01Icon,
  Calendar03Icon,
  CameraVideoIcon,
  CheckmarkSquare02Icon,
  CustomerServiceIcon,
  Search01Icon,
} from "hugeicons-react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import styles from "./BenefitsSection.module.scss";
import ItemCard from "./ItemCard/ItemCard";

const BenefitsSection = () => {
  return (
    <section className={styles.section} id="benefits">
      <div className={styles.title}>ПЛЮСЫ РАБОТЫ С НАМИ:</div>
      <div className={styles.image} />
      <div className={styles.contentGrid}>
        <ContentWrapper className={styles.contentBox}>
          <ItemCard
            icon={<Calculator01Icon size={100} color="#fff" strokeWidth={1} className={styles.icon} />}
            title={"Можем реализовать проект в рамках вашего бюджета"}
            text={"И знаем способы, как делать качественно в разных финансовых рамках."}
          />
        </ContentWrapper>
        <ContentWrapper className={styles.contentBox}>
          <ItemCard
            icon={<CameraVideoIcon size={100} color="#fff" strokeWidth={1} className={styles.icon} />}
            title={"У нас есть свой парк техники"}
            text={
              "Это позволяет не зависеть от посредников и сокращать расходы. Но также мы состоим в партнерстве с ренталами в разных городах."
            }
          />
        </ContentWrapper>
        <ContentWrapper className={styles.contentBox}>
          <ItemCard
            icon={<Calendar03Icon size={100} color="#fff" strokeWidth={1} className={styles.icon} />}
            title={"Соблюдаем сроки"}
            text={"И можем сделать все за необходимое время, но предпочитаем работать не на скорость, а на результат."}
          />
        </ContentWrapper>
        <ContentWrapper className={styles.contentBox}>
          <ItemCard
            icon={<CustomerServiceIcon size={100} color="#fff" strokeWidth={1} className={styles.icon} />}
            title={"На связи 24/7"}
            text={"Нам действительно можно позвонить со срочным заказом  посреди ночи. Попробуйте!"}
          />
        </ContentWrapper>
        <ContentWrapper className={`${styles.contentBox} ${styles.outPoint}`}>
          <ItemCard
            className={styles.outPoint}
            icon={<Search01Icon size={100} color="#fff" strokeWidth={1} className={styles.icon} />}
            title={"Держим руку на пульсе индустрии"}
            text={
              "Следим за трендами и новинками съемочного оборудования. Изучаем плагины, пользуемся нейронными сетями. Развиваемся и бросаем себе новые вызовы, улучшая качество своих работ."
            }
          />
        </ContentWrapper>
        <ContentWrapper className={`${styles.contentBox} ${styles.outPoint}`}>
          <ItemCard
            className={styles.outPoint}
            icon={<CheckmarkSquare02Icon size={100} color="#fff" strokeWidth={1} className={styles.icon} />}
            title={"Работаем по принципу when it’s done"}
            text={"Мы вкладываем в проект столько усилий, сколько потребуется, без дополнительных доплат и комиссий."}
          />
        </ContentWrapper>
      </div>
    </section>
  );
};

export default BenefitsSection;
