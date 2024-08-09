import React, { useState } from "react";
import { ProfileHold } from "./Profile.styles";
import BG from "../../../assets/profile/editBG.png";
import Logo from "../../../assets/profile/editLOGO.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import { serverDomain } from "../../../Constant/serverDomain";

const Profile = ({ formData}) => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(BG);
  const [logoImage, setLogoImage] = useState(Logo);

  console.log(formData);

  const editProfile = () => {
    navigate("/EditProfile");
  };  

 
const backPage = () => {
  navigate("/profile");
}
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (jpg, jpeg, png)");
    }
  };
  const openCreateSession = () => {
    navigate("/createSession")
  };
  return (
    <ProfileHold>
      <div
        className="bgImg"
        onClick={() => document.getElementById("bgInput").click()}
      >
        <img
          src={formData?.cover ? `${serverDomain}/${formData?.cover}` : backgroundImage}
          alt="background"
          style={{ objectFit: "cover" }}
        />
        <input
          type="file"
          id="bgInput"
          style={{ display: "none" }}
          accept="image/jpeg, image/png, image/jpg"
          onChange={(e) => handleImageChange(e, setBackgroundImage)}
          disabled
        />
      </div>
      <div
        className="logo"
        onClick={() => document.getElementById("logoInput").click()}
      >
        <figure>
          <img src={formData?.avatar ? `${serverDomain}/${formData?.avatar}` : logoImage} alt="logo" />
          <input
            type="file"
            id="logoInput"
            style={{ display: "none" }}
            accept="image/jpeg, image/png, image/jpg"
            onChange={(e) => handleImageChange(e, setLogoImage)}
            disabled
          />

        </figure>
      </div>
      <div className="textxWrap">
        <div className="text">
          <h2>{formData?.firstName + " " + formData?.lastName}</h2>
          <p>{formData?.designation}</p>
          <strong>{formData?.coachingExperience[0]?.title}</strong>
        </div>
      </div>
      <div className="btn">
        <Button width="208px" onClick={editProfile}>
          Edit Profile
        </Button>
        <Button width="208px" type="outline" click={backPage} onClick={openCreateSession}>
          Create Sessions
        </Button>
        <Button width="208px" type="outline">
          Manage Calendar
        </Button>
      </div>
    </ProfileHold>
  );
};

export default Profile;
