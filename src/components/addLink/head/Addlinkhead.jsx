import React, { useContext } from "react";

import styles from "./head.module.css";
import { sharedData } from "../../../App";
function Addlinkhead({ title, description }) {
  const context = useContext(sharedData);
  const { addLink } = context;
  const path = window.location.pathname;
  return (
    <div className={styles.container + " " + "Flex"}>
      <h2>{title}</h2>
      <p>{description}</p>
      {path === "/" && (
        <label className={styles.addLink} onClick={addLink}>
          + Add new link
        </label>
      )}
    </div>
  );
}

export default Addlinkhead;
