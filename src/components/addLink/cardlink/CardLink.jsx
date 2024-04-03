import React, { useContext, useState } from "react";
import Github from "../../svgs/Github";
import styles from "./cardstyle.module.css";
import { Link } from "react-router-dom";
import { sharedData } from "../../../App";

function CardLink({ index, value1, value2 }) {
  console.log(value1, "\n", value2);

  const dataRecived = useContext(sharedData);
  const links = dataRecived.state.old.links;
  // console.log(links);
  const [linkName, setLinkName] = useState(value1);
  const [dropdown, setDropdown] = useState(false);
  const [urlValue, setUrlValue] = useState(value2);
  const changeLinks = dataRecived.changeLinks;
  return (
    <div className={styles.containerCard + " " + "Flex_H"}>
      <div className={styles.title + " " + "Flex"}>
        <h3>= Link #{index + 1}</h3>
        <p>Remove</p>
      </div>
      <div className={styles.platform + " " + "Flex_H"}>
        <label htmlFor="platform">Platform</label>
        {/* {Array.from()} */}
        <input
          type="text"
          defaultValue={linkName.name ? linkName.name : value1}
          className={styles.selection}
          onClick={() => setDropdown(!dropdown)}
        />
        <label className={styles.choosenIcon}>{linkName.icon}</label>
        <div className={`dropdown  ${dropdown ? "active" : ""}`}>
          {links.map((item, index) => (
            <div key={index} className={styles.contLink + " " + "Flex"}>
              <Link
                to={`${item.path}`}
                className={styles.dropdown__Link}
                onClick={() => {
                  setLinkName({ icon: item.icon, name: item.name });
                  setDropdown(false);
                }}
              >
                <span className={styles.icon__Drop}>{item.icon}</span>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        {/* <select id="platform">
          <option value={`fas fa-user github`}>&f09b; Github</option>
          <option value={"linkedin"}>Linkedin</option>
          <option value={"youtube"}>Youtube</option>
        </select> */}
      </div>
      <div className="Flex_H">
        <label htmlFor="Link">Link</label>
        <input
          type="url"
          defaultValue={urlValue}
          onChange={(e) => {
            console.log(e.target.value);
            setUrlValue(() => e.target.value);
            changeLinks(linkName.name, e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default CardLink;
