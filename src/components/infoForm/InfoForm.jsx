import React, { useState } from "react";
import styles from "./InfoForm.module.css";
import { useContext } from "react";
import { sharedData } from "../../App";
function InfoForm() {
  const dataRecived = useContext(sharedData);
  console.log(dataRecived.changeDate);
  return (
    <div className={styles.InfoForm + " " + "Flex"}>
      <div className="Flex">
        <label>User Name</label>
        <input
          type="text"
          //   value=}
          onChange={(e) =>
            dataRecived.changeDate(dataRecived.firstName, e.target.value)
          }
        />
      </div>
      <div className="Flex">
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) =>
            dataRecived.changeDate(dataRecived.lastName, e.target.value)
          }
        />
      </div>
      <div className="Flex">
        <label>Email</label>
        <input
          type="email"
          onChange={(e) =>
            dataRecived.changeDate(dataRecived.email, e.target.value)
          }
        />
      </div>
    </div>
  );
}

export default InfoForm;
