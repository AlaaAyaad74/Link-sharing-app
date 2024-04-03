import React from "react";
import styles from "./head.module.css";
import { sharedData } from "../../../App";
function Addlinkhead({ title, description }) {
  const path = window.location.pathname;

  return (
    <div className={styles.container + " " + "Flex"}>
      <h2>{title}</h2>
      <p>{description}</p>
      <input
        type="file"
        id="newlink"
        multiple={true}
        onDrop={(e) => console.log(e.target.value)}
      />
      {path === "/" && (
        <label htmlFor="newlink" className={styles.addLink}>
          + Add new link
        </label>
      )}
    </div>
  );
}

export default Addlinkhead;
