import { FC } from "react";
import styles from "./Card.module.scss";

interface ICardProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const Card: FC<ICardProps> = ({ icon, text, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardInnerBox}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
