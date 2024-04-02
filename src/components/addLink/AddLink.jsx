import React from "react";
import styles from "./AddLink.module.css";
import Addlinkhead from "./head/Addlinkhead";
import CardLink from "./cardlink/CardLink";
import Addinfo from "../addInfo/Addinfo";
function AddLink({ title, description }) {
  const path = window.location.pathname;
  console.log(path);
  return (
    <div className={styles.container}>
      <Addlinkhead title={title} description={description} />
      {path === "/" && (
        <div className={styles.contCards}>
          <>
            <CardLink />
            <CardLink />
          </>
        </div>
      )}
      {path === "/profile" && <Addinfo />}
      <div className="Border">
        <button
          className={styles.save__btn}
          onClick={() => {
            console.log("I'm Save");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddLink;
