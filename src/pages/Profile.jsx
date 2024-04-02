import React from "react";
import Mobile from "../components/mobile/Mobile";
import styles from "../components/main_Section/MainStyle.module.css";
import AddLink from "../components/addLink/AddLink";
function Profile() {
  return (
    <div className={styles.container}>
      <div
        className={styles.mobile}
        style={{ background: "var(--primary-color)", borderRadius: "10px" }}
      >
        <Mobile />
      </div>
      <AddLink
        title={"ProfileDetails"}
        description={
          "Add your details to create apersonal touch to your profile"
        }
      />
    </div>
  );
}

export default Profile;
