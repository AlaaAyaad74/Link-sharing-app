import React from "react";

import Github from "../../svgs/Github";
import styles from "./cardstyle.module.css";
function CardLink() {
  return (
    <div className={styles.containerCard + " " + "Flex_H"}>
      <div className={styles.title + " " + "Flex"}>
        <h3>= Link #1</h3>
        <p>Remove</p>
      </div>
      <div className={styles.platform + " " + "Flex_H"}>
        <label htmlFor="platform">Platform</label>
        <select id="platform">
          <option value={"github"}>
            {/* <Github /> */}
            Github
          </option>
          <option value={"linkedin"}>Linkedin</option>
          <option value={"youtube"}>Youtube</option>
        </select>
      </div>
      <div className="Flex_H">
        <label htmlFor="Link">Link</label>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default CardLink;
