import React from "react";
import styles from "./Header.module.css";
import LinkSvg from "../svgs/LinkSvg";
import { Link } from "react-router-dom";
import ProfileSvg from "./../svgs/ProfileSvg";
import EyeSvg from "../svgs/EyeSvg";
function Header() {
  const blueLinkIcon = {
    backgroundColor: "var(--btn-color)",
    width: "30px",
    height: "30px",
    borderRadius: "4px",
    marginInlineEnd: "6px",
  };

  return (
    <div>
      <div className={styles.container + " " + "Flex"}>
        <div className="logo Flex">
          <LinkSvg style={blueLinkIcon} />
          <h1>devLinks</h1>
        </div>
        <div className={styles.links + " " + "Flex"}>
          <Link className="Flex" to={"/"}>
            <LinkSvg fill={"gray"} width={"25px"} height={"25px"} />
            <span className={styles.headText}>Links</span>
          </Link>
          <Link className="Flex" to={"/profile"}>
            <ProfileSvg />
            <span className={styles.headText}>Profile Details</span>
          </Link>
        </div>
        <div className="Flex">
          <Link to={"/preview"} className={styles.preview}>
            <EyeSvg />
            <span className={styles.headText}>Preview</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
