import React, { useContext } from "react";
import styles from "./AddLink.module.css";
import Addlinkhead from "./head/Addlinkhead";
import CardLink from "./cardlink/CardLink";
import Addinfo from "../addInfo/Addinfo";
import { sharedData } from "../../App";
function AddLink({ title, description }) {
  const path = window.location.pathname;
  const dataRecived = useContext(sharedData);

  return (
    <div className={styles.container}>
      <Addlinkhead title={title} description={description} />
      {path === "/" && (
        <div className={styles.contCards}>
          <>
            {dataRecived.state.new.links.map((item, index) => (
              <CardLink
                index={index}
                value1={item.name}
                value2={item.path}
                key={index}
              />
            ))}
          </>
        </div>
      )}
      {path === "/profile" && <Addinfo />}
      <div className="Border">
        <button className={styles.save__btn} onClick={dataRecived.save}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddLink;
