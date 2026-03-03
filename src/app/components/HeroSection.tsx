import styles from "./HeroSection.module.css";

import BannersCarousel from "./BannersCarousel";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <BannersCarousel />
    </section>
  );
};

export default HeroSection;
