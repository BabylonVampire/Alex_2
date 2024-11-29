import styles from "./ClientsSection.module.scss";

const ClientsSection = () => {
  const links = [
    {
      logo: "/src/assets/logos/artek.png",
    },
    {
      logo: "/src/assets/logos/blizzard.png",
    },
    {
      logo: "/src/assets/logos/gasprom.png",
    },
    {
      logo: "/src/assets/logos/huawei.png",
    },
    {
      logo: "/src/assets/logos/kdl.png",
    },
    {
      logo: "/src/assets/logos/mfti.png",
    },
    {
      logo: "/src/assets/logos/mts.png",
    },
    {
      logo: "/src/assets/logos/mvideo.png",
    },
    {
      logo: "/src/assets/logos/otkritie.png",
    },
    {
      logo: "/src/assets/logos/panavto.png",
    },
    {
      logo: "/src/assets/logos/psb.png",
    },
    {
      logo: "/src/assets/logos/raiffaizen.png",
    },
    {
      logo: "/src/assets/logos/revada.png",
    },
    {
      logo: "/src/assets/logos/rosatom.png",
    },
    {
      logo: "/src/assets/logos/samolet.png",
    },
    {
      logo: "/src/assets/logos/sber.png",
    },
    {
      logo: "/src/assets/logos/sony.png",
    },
    {
      logo: "/src/assets/logos/tanuki.png",
    },
  ];
  return (
    <section className={styles.clientsSection} id="clients">
      <p className={styles.title}>СРЕДИ НАШИХ КЛИЕНТОВ</p>
      <div className={styles.logoTable}>
        {links.map((link) => (
          <a href="" className={styles.logoLink} style={{ backgroundImage: `url(${link.logo})` }} />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
