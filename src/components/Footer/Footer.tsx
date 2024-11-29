import { FC, memo } from "react";
import styles from "./Footer.module.scss";

interface IFooterProps {
  contacts: {
    phones: string[];
    emails: string[];
  };
}

const Footer: FC<IFooterProps> = memo(({ contacts }) => {
  const date = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <address className={styles.footerContainer}>
        <p className={styles.text}>
          Ответим на вопросы, проконсультируем, посчитаем смету под ваш проект — звоните или пишите:
        </p>
        <p className={styles.text}>Контакты:</p>
        {contacts.phones.map((phone) => (
          <p className={styles.phone} key={phone}>
            <a
              className={styles.link}
              href={`tel:${phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")}`}
            >
              {phone}
            </a>
          </p>
        ))}
        {contacts.emails.map((email) => (
          <p className={styles.email} key={email}>
            <a className={styles.link} href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        ))}
      </address>
      <div className={styles.copyright}>
        <p>© {date} Все права защищены. Сделано командой GT Studio</p>
      </div>
    </footer>
  );
});

export default Footer;
