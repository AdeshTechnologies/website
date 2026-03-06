import Link from "next/link";

import styles from "./HotDeals.module.css";

import HotDealsCarousel from "./HotDealsCarousel";

const HotDeals = () => {
  return (
    <section className={styles.hotDeals}>
      {/* Title */}
      <h1>Hot Deals</h1>
      {/* Buttons that change Deals Shown */}
      <div className={styles.hotDealsNavigation}>
        <button>Latest Arrivals</button>
        <button>Hot Discounts</button>
        <button>Easter Offers</button>
      </div>
      {/* Grid List of Product Cards */}
      <div className={styles.hotDealsProductsCarousel}>
        <HotDealsCarousel />
      </div>
    </section>
  );
};

export default HotDeals;
