import { FC, PropsWithChildren } from "react";
import styles from "./ContentWrapper.module.scss";

type TProps = {
  className?: string;
};

const ContentWrapper: FC<PropsWithChildren<TProps>> = ({ children, className }) => {
  return <div className={`${styles.contentWrapper} ${className}`}>{children}</div>;
};

export default ContentWrapper;
