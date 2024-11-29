import { FC } from "react";
import styles from "./ItemCard.module.scss";

interface IItemCardProps {
  number: number;
  points: string[];
}

const ItemCard: FC<IItemCardProps> = ({ points, number }) => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.numberSide}>
        <div className={styles.number}>{number}</div>
        <div className={styles.stageLabel}>ЭТАП</div>
      </div>
      <div className={styles.verticalDivider} />
      <ul className={styles.pointList}>
        {points.map((point) => (
          <li className={styles.point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCard;
