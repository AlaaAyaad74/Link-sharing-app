import React from "react";
import Mobile from "../components/mobile/Mobile";
import styles from "../components/preview/Preview.module.css";
import Headerpreview from "../components/preview/Header/Headerpreview";
function Preview() {
  return (
    <div className={styles.container}>
      <div className={styles.land}>
        <div className={styles.cover}>
          <Headerpreview />
        </div>

        <Mobile />
      </div>
    </div>
  );
}

export default Preview;
