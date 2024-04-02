import React from "react";
import styles from "./uploadimage.module.css";
function uploadImage() {
  return (
    <div className={styles.imgCont + " " + "Flex"}>
      <p style={{ width: "30%" }}>profile picture</p>
      <div>
        <label htmlFor="profileImage" className={styles.profileImage}>
          <img src="/01.png" />
        </label>
        <input type="file" id="profileImage" />
      </div>
      <p style={{ width: "40%" }}>
        image must be below 1024 X 1024px.
        <br />
        Use PNG,JPG,or BMP format.
      </p>
    </div>
  );
}

export default uploadImage;
