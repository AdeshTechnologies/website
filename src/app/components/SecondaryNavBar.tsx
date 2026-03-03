import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import styles from "./SecondaryNavBar.module.css";

const SecondaryNavBar = () => {
  return (
    <div className={styles.navSecondary}>
      <div className={styles.navSecondaryContacts}>
        <div className={styles.navSecondaryContactsItem}>
          <FaLocationDot />
          <span className={styles.navSecondaryContactsItemText}>
            Nairobi, Kenya
          </span>
        </div>
        <span>|</span>
        <div className={styles.navSecondaryContactsItem}>
          <IoIosMail size={20} />
          <span className={styles.navSecondaryContactsItemText}>
            info@adeshtechnologies.co.ke
          </span>
        </div>
        <span>|</span>
        <div className={styles.navSecondaryContactsItem}>
          <FaPhone />
          <span className={styles.navSecondaryContactsItemText}>
            +254 746 530 808
          </span>
        </div>
      </div>
      <div className={styles.navSecondaryLinks}>
        <span className={styles.navSecondaryContactsItemText}>Help</span>
        <span>|</span>
        <span className={styles.navSecondaryContactsItemText}>
          Orders & Returns
        </span>
      </div>
    </div>
  );
};

export default SecondaryNavBar;
