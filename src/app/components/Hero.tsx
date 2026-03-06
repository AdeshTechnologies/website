import styles from "./Hero.module.css";

import BannersCarousel from "./BannersCarousel";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <BannersCarousel />
    </section>
  );
};

export default Hero;
