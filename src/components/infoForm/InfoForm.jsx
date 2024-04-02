import React, { useState } from "react";
import styles from "./InfoForm.module.css";
import { useContext } from "react";
import { sharedData } from "../../App";
function InfoForm() {
  const dataRecived = useContext(sharedData);
  //   const [userName, setUserName] = useState(dataRecived.firstName);

  return (
    <div className={styles.InfoForm + " " + "Flex"}>
      <div className="Flex">
        <label>User Name</label>
        <input
          type="text"
          onChange={(e) => {
            dataRecived.firstName = e.target.value;
          }}
        />
      </div>
      <div className="Flex">
        <label>Last Name</label>
        <input type="text" />
      </div>
      <div className="Flex">
        <label>Email</label>
        <input type="email" />
      </div>
    </div>
  );
}

export default InfoForm;
