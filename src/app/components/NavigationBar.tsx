"use client";

import styles from "./NavigationBar.module.css";

import PrimaryNavBar from "@/app/components/PrimaryNavBar";
import SecondaryNavBar from "@/app/components/SecondaryNavBar";

import { useScrollTrigger } from "@/lib/hooks/useScrollTrigger";

const NavigationBar = () => {
  const stickPrimaryNavbar = useScrollTrigger(50);
  return (
    <nav className={styles.nav}>
      <div className={styles.navSecondary}>
        <SecondaryNavBar />
      </div>
      <div>
        <PrimaryNavBar />
      </div>
      <div
        className={
          stickPrimaryNavbar ? styles.navPrimaryFix : styles.navPrimary
        }
      >
        <PrimaryNavBar />
      </div>
    </nav>
  );
};

export default NavigationBar;
