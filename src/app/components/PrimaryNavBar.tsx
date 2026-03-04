"use client";

import { useState } from "react";

import Link from "next/link";

import { BiHeart, BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";

import styles from "./PrimaryNavBar.module.css";

import { PRODUCT_CATEGORIES } from "@/lib/data/dummy-data";
import DrawerNavigationBar from "./DrawerNavigationBar";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PrimaryNavBar = () => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [selectedSubMenuId, setSelectedSubMenuId] = useState<number>(1);
  const [previousPage, setPreviousPage] = useState<number | undefined>(
    undefined,
  );

  // Callback function to toggle (open or close) side menu - parent
  const toggleSideMenu = () => {
    setOpenSideMenu((prevState) => !prevState);
  };

  // Callback function to handle menu status
  const handleShowMenu = () => {
    setShowSubMenu(false);
    setShowMenu(true);
    setSelectedSubMenuId(1);
    setPreviousPage(2);
  };

  // Callback function to handle sub menu status
  const handleShowSubMenu = (id: number) => {
    setShowMenu(false);
    setShowSubMenu(true);
    setSelectedSubMenuId(id);
    setPreviousPage(1);
  };

  let delta: number = 0;

  if (previousPage) {
    delta = selectedSubMenuId - previousPage;
  }

  return (
    <div className={styles.primaryNavBar}>
      <div className={styles.primaryNavBarMenuIcon}>
        <CgMenuLeft
          aria-label="Open side menu"
          size={32}
          onClick={toggleSideMenu}
        />
      </div>
      {openSideMenu && (
        <DrawerNavigationBar open={openSideMenu} setOpen={toggleSideMenu}>
          {showMenu && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={styles.sideMenu}
            >
              {PRODUCT_CATEGORIES.map((category) => (
                <div key={category.id} className={styles.sideMenuContent}>
                  <Link href={category.url} onClick={toggleSideMenu}>
                    {category.name}
                  </Link>
                  {category.subCategories.length > 0 ? (
                    <BsChevronRight
                      aria-label="Open Sub Menu"
                      onClick={() => handleShowSubMenu(category.id)}
                      size={18}
                    />
                  ) : (
                    <Link href={category.url} onClick={toggleSideMenu}>
                      <BsChevronRight />
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
          {showSubMenu && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={styles.sideSubMenu}
            >
              {PRODUCT_CATEGORIES.filter(
                (category) => category.id === selectedSubMenuId,
              ).map((category) => (
                <div key={category.id} className={styles.sideSubMenuContent}>
                  <button
                    type="button"
                    onClick={handleShowMenu}
                    aria-label="Return to main side menu"
                  >
                    <BsChevronLeft />
                    MAIN MENU
                  </button>
                  <h2>{category.name}</h2>
                  {category.subCategories.map((subCategory) => (
                    <Link
                      key={subCategory.id}
                      href={subCategory.url}
                      onClick={toggleSideMenu}
                    >
                      {subCategory.name}
                    </Link>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </DrawerNavigationBar>
      )}
      <div className={styles.logo}>Adesh</div>
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
          <BiSearch size={26} />
        </div>
        <div>
          <BiHeart size={26} />
        </div>
        <div>
          <BiShoppingBag size={26} />
        </div>
        <div>
          <BiUser size={26} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavBar;
