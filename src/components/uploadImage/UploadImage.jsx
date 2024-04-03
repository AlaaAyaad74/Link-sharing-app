import React, { useContext, useState } from "react";
import styles from "./uploadimage.module.css";
import { sharedData } from "../../App";
function UploadImage() {
  const dataRecived = useContext(sharedData);

  const [selectedImage, setSelectedImage] = useState(null);
  function handleChange(e) {
    console.log(e.target.files);
    setSelectedImage(() => URL.createObjectURL(e.target.files[0]));

    changeData(
      "profileImage",
      URL.createObjectURL(e.target.files[0])
        ? URL.createObjectURL(e.target.files[0])
        : ""
    );
  }
  const changeData = dataRecived.changeData;
  return (
    <div className={styles.imgCont + " " + "Flex"}>
      <p style={{ width: "30%" }}>profile picture</p>
      <div>
        <label
          htmlFor="profileImage"
          className={styles.profileImage}
          style={{
            backgroundImage: `url(${dataRecived.state.new.profileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={selectedImage} alt="" />
        </label>
        <input
          type="file"
          id="profileImage"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <p style={{ width: "40%" }}>
        image must be below 1024 X 1024px.
        <br />
        Use PNG,JPG,or BMP format.
      </p>
    </div>
  );
}

export default UploadImage;
