import React, { useContext } from "react";
import styles from "./Mobilestyle.module.css";
import { Link } from "react-router-dom";
import Buttonlink from "./buttonLink/Buttonlink";
import LinkedinSvg from "../svgs/LinkedinSvg";
import Github from "../svgs/Github";
import YoutubeSvg from "../svgs/YoutubeSvg";
import { sharedData } from "../../App";
function Mobile() {
  const SocialLinks = [
    {
      name: "Linkedin",
      icon: <LinkedinSvg />,
      backgroundColor: "#0a66c2",
    },
    {
      name: "Github",
      icon: <Github />,
      backgroundColor: "#000000",
    },
    {
      name: "Youtube",
      icon: <YoutubeSvg />,
      backgroundColor: "red",
    },
    {
      name: "",
      icon: "",
      backgroundColor: "",
    },
    {
      name: "",
      icon: "",
      backgroundColor: "",
    },
  ];
  const dataRecived = useContext(sharedData);

  return (
    <div className={styles.mob__Cont}>
      <div className={styles.cont + " " + "Flex"}>
        <div className={styles.ava__text + " " + "Flex"}>
          <img src="/01.png" alt="" className={styles.avatar} />
          <h2>{dataRecived.firstName}</h2>
          <p>FrontEnd developer</p>
        </div>
        <div className={styles.socisl_links_cont + " " + "Flex"}>
          {SocialLinks.map((item, index) => (
            <Buttonlink
              background={item.backgroundColor}
              name={item.name}
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mobile;
