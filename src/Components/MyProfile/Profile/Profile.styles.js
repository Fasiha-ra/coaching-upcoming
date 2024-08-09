import styled from "styled-components";
export const ProfileHold = styled.div`
  margin-bottom: 20px;
 
  /* padding: 10px 0 0 0; */
  .bgImg {
    /* width: 100%; */
    /* background: var(--gray-30); */
    /* height: 300px; */
    /* border-radius: 20px; */
    position: relative;
    cursor: pointer;
    img {
      height:150px;
      width: 100%;
      @media (min-width: 768px){
        height: 250px;
      }
      @media (min-width: 992px){
        height: 300px;
      }
     
    }
  }
  .logo {
    /* position: relative; */
    cursor: pointer;
    z-index: 1;
    margin-top: -64px;
    position: relative;
    margin-left: 20px;
    @media (min-width: 768px){
      margin-top:-125px;
    }
    /* margin-top: -70px; */
   
    /* background: white;
    border-radius: 50%;
    margin-left: 20px;
    margin-bottom: 30px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3); */
    /* @media (min-width: 576px) {
      /* margin-top: -100px; 
      width: 170px;
      height: 170px;
    }
    @media (min-width: 992px) {
      width: 238px;
      height: 238px;
    } */
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      @media (min-width: 768px){
        width: 170px;
        height: 170px;
     }
     @media (min-width: 992px){
      width: 234px;
      height: 234px;
     }
  }}
  .textxWrap {
    padding: 0 20px 15px;
    @media (min-width: 768px) {
      padding-bottom: 30px;
    }
    p,
    span,
    strong {
      font-size: 17px;
      font-weight: 400;
      color: var(--black);
      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
  }
  .btn {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
   button{
    width: 152px;
    @media (min-width: 768px){
      width: 208px;
    }
   }
  }
`;
