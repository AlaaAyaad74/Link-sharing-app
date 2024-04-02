import React from "react";
import { Link } from "react-router-dom";
import styles from "./ButtonStyle.module.css";
import Rightarrow from "../../svgs/Rightarrow";
function Buttonlink({ background, name, icon }) {
  return (
    <Link
      style={{ background: background ? background : "#ddd" }}
      to={"/"}
      className={styles.socialLinks + " " + "Flex"}
    >
      <div className="Flex" style={{ alignItems: "flex-start" }}>
        <span className={styles.icon}>{icon}</span>
        <span>{name}</span>
      </div>
      {background ? (
        <span className={styles.arrow}>
          <Rightarrow />
        </span>
      ) : (
        ""
      )}
    </Link>
  );
}

export default Buttonlink;
