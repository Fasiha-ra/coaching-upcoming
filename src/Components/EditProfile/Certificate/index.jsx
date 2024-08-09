import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { CertificateWrap } from "./certificate.styles";
import { serverDomain } from "../../../Constant/serverDomain";

const Certificate = ({ formData, setFormData, handleChange, handleSubmit, user }) => {
  const navigate = useNavigate();
  const [certificateImage, setCertificateImage] = useState(
    formData?.id || user ? null : ""
  );
  const [errors, setErrors] = useState({});

  const backToProfile = () => {
    navigate("/EditProfile");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.certificates[0]?.title) {
      newErrors.title = "Title is required";
    }
    if (!formData.certificates[0]?.description) {
      newErrors.description = "Description is required";
    }
    if (!certificateImage && !formData.certificates[0]?.image) {
      newErrors.image = "An image is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
      setFormData({
        ...formData,
        certificates: [
          {
            ...formData.certificates[0],
            image: file,
          },
        ],
      });
      setCertificateImage(file);
      setErrors((prevErrors) => {
        const { image, ...rest } = prevErrors;
        return rest;
      });
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: "Please select a valid image file (jpg, jpeg, png)",
      }));
    }
  };

  const handleSubmitWithValidation = () => {
    if (validateForm()) {
      // handleSubmit();
      navigate("/setting")
    }
  };

  return (
    <CertificateWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Add certificates</h4>
      </div>
      <p>Add your certificate details</p>
      <div className="inputWrapper">
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="title"
        type="text"
        label="Title"
        name="title"
        bgClr="transparent"
        value={formData.certificates[0]?.title}
        onChange={(e) => {
          setFormData({
            ...formData,
            certificates: [
              {
                ...formData.certificates[0],
                title: e.target.value,
              },
            ],
          });
        }}
      />
      {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div className="inputWrapper">
      <TextField
        variant="textarea"
        label="Description"
        parentClass="textareaHolder"
        value={formData.certificates[0]?.description}
        onChange={(e) => {
          setFormData({
            ...formData,
            certificates: [
              {
                ...formData.certificates[0],
                description: e.target.value,
              },
            ],
          });
        }}
      />
      {errors.description && <span className="error">{errors.description}</span>}
      </div>
      <div className="img">
        <span>Image</span>
        <div className="inputWrapper">
        <div className="imgWrap">
          <img
            src={
              certificateImage
                ? URL.createObjectURL(certificateImage)
                : `${serverDomain}${formData.certificates[0].image}`
            }
            alt="Certificate"
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          />
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            style={{
              opacity: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            onChange={handleImageChange}
          />
        </div>
        {errors.image && <span className="error">{errors.image}</span>}
        </div>
      </div>
      <Button width="177px" onClick={handleSubmitWithValidation}>
        Save
      </Button>
    </CertificateWrap>
  );
};

export default Certificate;
