import React, { useContext } from "react";
import styles from "./Mobilestyle.module.css";

import Buttonlink from "./buttonLink/Buttonlink";
import userImage from "./../../assets/user.png";
import { sharedData } from "../../App";

function Mobile() {
  const dataRecived = useContext(sharedData);

  const state = dataRecived.state.new;
  console.log(state.profileImage);
  return (
    <div className={styles.mob__Cont}>
      <div className={styles.cont + " " + "Flex"}>
        <div className={styles.ava__text + " " + "Flex"}>
          <img
            src={state.profileImage ? state.profileImage : userImage}
            alt=""
            className={styles.avatar}
          />
          <h2 style={{ margin: "20px 0 0 0" }}>
            {state.firstName + " " + state.lastName}
          </h2>
          <p style={{ margin: "20px 0 0 0" }}>{state.email}</p>
        </div>
        <div className={styles.socisl_links_cont + " " + "Flex"}>
          {dataRecived.state.new.links.map((item, index) => (
            <Buttonlink
              background={item?.backgroundColor}
              name={item.name}
              icon={item?.icon}
              path={item.value}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mobile;
