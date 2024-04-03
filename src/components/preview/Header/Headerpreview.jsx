import React from "react";
import Mobile from "../../mobile/Mobile";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Headerpreview() {
  return (
    <div className={styles.container_Head_View + " " + "Flex"}>
      <Link id={styles.left} to={"/"}>
        Back to Editor
      </Link>
      <Link id={styles.right} to={"/"}>
        share Link
      </Link>
    </div>
  );
}

export default Headerpreview;
