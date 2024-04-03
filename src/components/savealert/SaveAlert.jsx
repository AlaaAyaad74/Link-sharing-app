import React from "react";
import styles from "./saveStyle.module.css";
function SaveAlert() {
  return (
    <div className={"Flex" + " " + styles.contAlert}>
      Your changes have been successfully saved!
    </div>
  );
}

export default SaveAlert;
