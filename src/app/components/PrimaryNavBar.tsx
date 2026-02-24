import Link from "next/link";

import { BiHeart, BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";

import styles from "./PrimaryNavBar.module.css";

import { PRODUCT_CATEGORIES } from "@/lib/data/dummy-data";

const PrimaryNavBar = () => {
  return (
    <div className={styles.primaryNavBar}>
      <div className={styles.logo}>Adesh Technologies</div>
      <div className={styles.primaryNavBarLinks}>
        {PRODUCT_CATEGORIES.map((category) => (
          <div className={styles.dropdown} key={category.id}>
            <Link href="/" className={styles.dropdownTrigger}>
              {category.name}
            </Link>
            <div className={styles.dropdownContent}>
              <div>
                <h3>Subcategories</h3>
                <div className={styles.dropdownContentLinks}>
                  {category.subCategories.map((subCategory) => (
                    <Link key={subCategory.id} href="/">
                      {subCategory.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3>Hot Brands</h3>
              </div>
              <div>
                <h3>Top Selling</h3>
              </div>
              <div>
                <h3>Latest Arrivals</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navPrimaryUserMenu}>
        <div>
          <BiSearch size={24} />
        </div>
        <div>
          <BiHeart size={24} />
        </div>
        <div>
          <BiShoppingBag size={24} />
        </div>
        <div>
          <BiUser size={24} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavBar;
