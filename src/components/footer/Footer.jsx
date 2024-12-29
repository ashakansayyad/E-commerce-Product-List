import React from "react";
import styles from "./Footer.module.css";
import {
    logo_big,
    instagram_icon,
    whatsapp_icon,
    pinterest_icon
} from '../../assets/index';
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_logo}>
                <img src={logo_big} alt="icon" />
                <p>SHOPPER</p>
            </div>
            <ul className={styles.footer_links}>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact</li>
            </ul>

            <div className={styles.footer_social_icon}>
                <div className={styles.footer_icons_container}>
                    <img src={instagram_icon} alt="img" />
                </div>
                <div className={styles.footer_icons_container}>
                    <img src={pinterest_icon} alt="img" />
                </div>
                <div className={styles.footer_icons_container}>
                    <img src={whatsapp_icon} alt="img" />
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <hr />
                {/* set current year */}
                <p>Copyright @ {new Date().getFullYear()} - All Right Reserved.</p>
            </div>



        </div>
    );
}

export default Footer;
