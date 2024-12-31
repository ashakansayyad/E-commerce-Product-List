import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_copyright}>
        <hr />
        {/* set current year */}
        <p>Copyright @ {new Date().getFullYear()} - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
