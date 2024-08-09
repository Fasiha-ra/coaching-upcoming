import styled from "styled-components";

export const EditProfileWrap = styled.div`
padding-bottom: 30px;
.backimg{
  cursor: pointer;
}
  .bgImg {
    width: 100%;
    height: 300px;
    position: relative;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .logo {
    cursor: pointer;
    position: relative;
    z-index: 1;
    margin-top: -70px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-left: 20px;
    margin-bottom: 30px;
    @media (min-width: 576px) {
      margin-top: -100px;
      width: 170px;
      height: 170px;
    }
    @media (min-width: 1440px) {
      width: 238px;
      height: 238px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .flex {
    display: block;
    
    @media (min-width: 992px){
      display: flex;
      align-items: start;
      gap: 20px;
    }
    .wrap {
      flex-grow: 1;
    }
  }
  .info {
    padding: 0 20px;
    @media (min-width: 992px){
      padding: 0 0 0 40px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      @media (min-width: 576px){
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .managementWrap {
      width: 100%;
      background-color: transparent;
      border: 1px solid;
      box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
      min-height: 80px;
      border-radius: 10px;
      padding: 20px 50px 20px 25px;
      .flex {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
      }
      span {
        border: 1px solid;
        box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.37);
        padding: 10px 20px;
        border-radius: 20px;
        margin-bottom: 20px;
      }
      button {
        background-color: var(--blue);
        padding: 10px 20px;
        display: block;
        margin-left: auto;
        font-size: 25px;
        color: var(--white);
        border-radius: 50%;
      }
    }
  }
  .inputHolder {
    input {
      color: var(--black);
    }
  }
  .saveBtn{
    margin-top: 20px;
  display: flex;
  justify-content: end;
  }
  .inputWrapper{
    display: block;
    span{
      color: red;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
