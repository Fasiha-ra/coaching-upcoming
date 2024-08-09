import React, { useState, useEffect } from "react";
import { CertiWrapper } from "./Certificate.styles";
import { CertificateData } from "../../../Constant/Data";
import prev from "../../../assets/profile/prev.png";
import nextt from "../../../assets/profile/next.png";
import { TbPencil } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { serverDomain } from "../../../Constant/serverDomain";

const Certificate = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < CertificateData.length) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + itemsPerPage, CertificateData.length - itemsPerPage)
      );
    }
  };

  const currentItems = CertificateData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <CertiWrapper>
      <div className="wrapper">
        <div className="flexwrap">
          <h2>Certificate</h2>
          <div className="icons">
            <FaPlus />
            <TbPencil />
          </div>
        </div>
        <div className="cardWrap">
          <figure
            onClick={handlePrev}
            style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
          >
            <img src={prev} alt="prev icon" />
          </figure>
          <div className="cardHolder">
            {data?.certificates?.map((val, ind) => (
              <div className="card" key={ind}>
                <figure>
                  <img src={`${serverDomain}/${val.image}`} alt="certificate" />
                </figure>
                <h4>{val.title}</h4>
              </div>
            ))}
          </div>
          <figure
            onClick={handleNext}
            style={{
              cursor:
                currentIndex + itemsPerPage >= CertificateData.length
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <img src={nextt} alt="next icon" />
          </figure>
        </div>
      </div>
    </CertiWrapper>
  );
};

export default Certificate;
