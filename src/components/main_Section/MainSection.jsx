import React from "react";
import Mobile from "../mobile/Mobile";
import AddLink from "../addLink/AddLink";
import styles from "./MainStyle.module.css";

function MainSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mobile}>
          <Mobile />
        </div>
        <AddLink
          title={"Customize your links"}
          description={
            "Add/edit/remove links below and then share all your profiles with the world!"
          }
        />
      </div>
    </>
  );
}

export default MainSection;
