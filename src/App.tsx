import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BenefitsSection from "./sections/BenefitsSection/BenefitsSection";
import ClientsSection from "./sections/ClientsSection/ClientsSection";
import FullCycleSection from "./sections/FullCycleSection/FullCycleSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import PortfolioSection from "./sections/PortfolioSection/PortfolioSection";
import PriceSection from "./sections/PriceSection/PriceSection";
import ShowReelSection from "./sections/ShowReelSection/ShowReelSection";
import WorkValueSection from "./sections/WorkValueSection/WorkValueSection";

const App = () => {
  return (
    <main className={styles.mainBox}>
      <Header
        links={[
          {
            heading: "Примеры работ",
            link: "#about",
          },
          {
            heading: "Стоимость",
            link: "#benefits",
          },
        ]}
      />
      <HeroSection />
      <ShowReelSection />
      <PortfolioSection />
      <FullCycleSection />
      <WorkValueSection />
      <BenefitsSection />
      <ClientsSection />
      <PriceSection />
      <Footer
        contacts={{
          phones: ["+7 (903) 718-22-79"],
          emails: ["Alex-ike@yandex.ru"],
        }}
      />
    </main>
  );
};

export default App;
