import React, { useState } from "react";
import styles from "./InfoForm.module.css";
import { useContext } from "react";
import { sharedData } from "../../App";
function InfoForm() {
  const dataRecived = useContext(sharedData);
  const changeData = dataRecived.changeData;
  const state = dataRecived.state.new;
  function validateName(name) {
    if (name.length <= 10) {
      return name[0].toUpperCase() + name.slice(1);
    } else {
      alert("The most Length of first Name must less than 10 char");
    }
  }
  return (
    <div className={styles.InfoForm + " " + "Flex"}>
      <div className="Flex">
        <label>First Name</label>
        <input
          type="text"
          //  value={""}
          onChange={(e) =>
            changeData("firstName", validateName(e.target.value))
          }
        />
      </div>
      <div className="Flex">
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => changeData("lastName", validateName(e.target.value))}
        />
      </div>
      <div className="Flex">
        <label>Email</label>
        <input
          type="email"
          pattern=".+@example\.com"
          size="30"
          required
          onChange={(e) => changeData("email", e.target.value)}
        />
      </div>
    </div>
  );
}

export default InfoForm;
