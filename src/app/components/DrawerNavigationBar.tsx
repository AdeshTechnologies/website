"use client";

import useMeasure from "react-use-measure";

import { useMotionValue, useAnimate, motion } from "framer-motion";

import { MdClose } from "react-icons/md";

import styles from "./DrawerNavigationBar.module.css";

interface DrawerNavigationBarProps {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
}

const DrawerNavigationBar = ({
  open,
  setOpen,
  children,
}: DrawerNavigationBarProps) => {
  const [scope, animate] = useAnimate();
  const [drawerRef] = useMeasure();

  const x = useMotionValue(0);

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const xStart = typeof x.get() === "number" ? x.get() : 0;

    await animate("#drawer", {
      x: [xStart, "-100%"],
    });

    setOpen();
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={handleClose}
          className={styles.drawer}
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            className={styles.drawerWrapper}
            style={{ x }}
          >
            <div className={styles.drawerContentWrapper}>
              <div>
                <div className={styles.drawerContentHeader}>
                  <h1>Adesh Technologies</h1>
                  <MdClose
                    aria-label="Close drawer navigation icon"
                    onClick={handleClose}
                    size={28}
                  />
                </div>
              </div>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default DrawerNavigationBar;
