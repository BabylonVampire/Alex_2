import { FC } from "react";
import styles from "./ItemCard.module.scss";

interface IItemCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}

const ItemCard: FC<IItemCardProps> = ({ text, title, icon, className }) => {
  return (
    <div className={`${styles.itemCard} ${className}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.textBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default ItemCard;
