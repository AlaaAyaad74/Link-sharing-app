import React from "react";
import styles from "./head.module.css";
function Addlinkhead({ title, description }) {
  const path = window.location.pathname;
  console.log(path);
  return (
    <div className={styles.container + " " + "Flex"}>
      <h2>{title}</h2>
      <p>{description}</p>
      <input type="file" id="newlink" draggable />
      {path === "/" && (
        <label htmlFor="newlink" className={styles.addLink}>
          + Add new link
        </label>
      )}
    </div>
  );
}

export default Addlinkhead;
