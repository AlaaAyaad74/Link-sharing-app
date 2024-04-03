import React, { useContext, useState } from "react";
import styles from "./cardstyle.module.css";
import { Link } from "react-router-dom";
import { sharedData } from "../../../App";
import LinkedinSvg from "../../svgs/LinkedinSvg";
import YoutubeSvg from "../../svgs/YoutubeSvg";
import GithubSvg from "../../svgs/Github";
import angleImage from "../../../assets/down-arrow.svg";
import linkIcon from "../../../assets/link-solid.svg";
const links = [
  {
    name: "Linkedin",
    icon: <LinkedinSvg />,
    backgroundColor: "#0a66c2",
    path: "",
  },
  {
    name: "Github",
    icon: <GithubSvg />,
    backgroundColor: "#000000",
    path: "",
  },
  {
    name: "Youtube",
    icon: <YoutubeSvg />,
    backgroundColor: "red",
    path: "",
  },
];
function CardLink({ index, link }) {
  console.log(link);
  const dataRecived = useContext(sharedData);
  const { editLink, deleteLink } = dataRecived;

  const [dropdown, setDropdown] = useState(false);
  return (
    <div className={styles.containerCard + " " + "Flex_H"}>
      <div className={styles.title + " " + "Flex"}>
        <h3>= Link #{index + 1}</h3>
        <p onClick={() => deleteLink(index)} id={styles.remove}>
          Remove
        </p>
      </div>
      <div className={styles.platform + " " + "Flex_H"}>
        <label htmlFor="platform">Platform</label>
        {/* {Array.from()} */}
        <input
          type="text"
          value={link.name || ""}
          onChange={(e) => {
            editLink(index, {
              name: e.target.value,
              icon: null,
              backgroundColor: null,
            });
          }}
          className={styles.selection}
          onClick={() => setDropdown(!dropdown)}
        />
        {link.icon && <label className={styles.choosenIcon}>{link.icon}</label>}
        <img src={`${angleImage}`} id={styles.downAngle} alt="down Angle" />
        <div className={`dropdown  ${dropdown ? "active" : ""}`}>
          {links.map((item, i) => (
            <div key={i} className={styles.contLink + " " + "Flex"}>
              <Link
                to={`${item.path}`}
                className={styles.dropdown__Link}
                onClick={() => {
                  editLink(index, item);
                  setDropdown(false);
                }}
              >
                <span className={styles.icon__Drop}>{item.icon}</span>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="Flex_H" style={{ position: "relative" }}>
        <label htmlFor="Link">Link</label>
        <input
          style={{ fontSize: ".85rem" }}
          type="url"
          defaultValue={link.value}
          className={styles.selection}
          onChange={(e) => {
            editLink(index, { value: e.target.value });
          }}
        />
        <img src={`${linkIcon}`} id={styles.link_Icon} alt="linkIcon" />
      </div>
    </div>
  );
}

export default CardLink;
