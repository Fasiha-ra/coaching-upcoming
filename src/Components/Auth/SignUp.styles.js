import styled from "styled-components";
export const SignUpWrapper = styled.div`
  background-color: var(--primary-darkblue);
  height: 100vh;
  color: var(--white);
  display: flex;
  .imgHolder {
    overflow: hidden;
    img {
      display: none;
      height: 100vh;

      @media (min-width: 768px) {
        display: block;
        max-width: 700px;
        width: 100%;
      }
      @media (min-width: 1440px) {
        max-width: 872px;
        width: 100%;
      }
    }
  }
  .formHolder {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    form {
      .textHolder {
        img {
          padding-bottom: 30px;
          width: 200px;
          margin: 0 auto;
          @media (min-width: 768pxpx) {
            width: 256px;
          }
          @media (min-width: 1440px) {
            width: 356px;
          }
        }
      }
      p {
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        text-align: center;
        padding-bottom: 30px;
        margin-bottom: 0;
        @media (min-width: 1440px) {
          font-size: 20px;
          line-height: 24px;
        }
        @media (min-width: 1440px) {
          font-size: 25px;
          line-height: 29px;
        }
      }
      span {
        color: var(--primary-blue);
      }
      .inputHolder {
        padding-bottom: 15px;
        width: 100%;
        max-width: 531px;
        @media (min-width: 768px) {
          padding-bottom: 30px;
        }
        @media (min-width: 1440px) {
          max-width: 734px;
        }
      }
      button {
        display: block;
        margin: 0 auto;
      }
    }
  }
  .emailWrapper {
    width: 100%;
    @media (min-width: 1440px) {
      width: 734px;
    }
  }
  .grid {
    .inputHolder{
      @media (max-width: 768){
      padding-bottom: 10px !important;
      background-color: red;
    }
    }
   
    .emailWrapper {
      width: 100% !important;
      @media (min-width: 1440px) {
        width: 320px !important;
      }
    }
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    padding-bottom: 10px;
    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
