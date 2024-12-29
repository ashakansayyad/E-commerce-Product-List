import React from 'react';
import {bannerone_img,hand_icon,right_arrow} from '../../assets/index';
import styles from './Bannerone.module.css';
function Bannerone() {
  return (
    <div className={styles.bannerone}>
       <div className={styles.bannerone_Left}>
        <h2>NEW ARRIVALS ONLY</h2>

        <div>
          <div className={styles.bannerone_hand_icon}>
            <p>new</p>
            <img src={hand_icon} alt="hand_icon" />
          </div>
          <p>collections</p>
          <p>for Everyone</p>
        </div>
        <div className={styles.bannerone_latest_btn}>
          <div>Latest Collection</div>
          <img src={right_arrow} alt="icon" />
        </div>
      </div>
      <div className={styles.bannerone_Right}>
        <img src={bannerone_img} alt="icon" />
      </div>
    </div>
  )
}

export default Bannerone
