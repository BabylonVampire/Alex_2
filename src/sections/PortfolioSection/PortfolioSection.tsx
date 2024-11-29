import styles from "./PortfolioSection.module.scss";

const PortfolioSection = () => {
  const links = ["", "", "", "", "", "", "", "", ""];
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.title}>ПРИМЕРЫ НАШИХ РАБОТ</div>
      <div className={styles.portfolioGrid_desktop}>
        {links.map((link) => (
          <div className={styles.linkWrapper} key={link + "desktop"}>
            <iframe className={styles.linkIframe} />
          </div>
        ))}
      </div>
      <div className={styles.portfolioGrid_mobile}>
        <div className={styles.firstRow}>
          {links.map(
            (link, index) =>
              index % 2 === 0 && (
                <div className={styles.linkWrapper} key={link + "mobile"}>
                  <iframe className={styles.linkIframe} />
                </div>
              )
          )}
        </div>
        <div className={styles.secondRow}>
          {links.map(
            (link, index) =>
              index % 2 === 1 && (
                <div className={styles.linkWrapper} key={link + "mobile"}>
                  <iframe className={styles.linkIframe} />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
