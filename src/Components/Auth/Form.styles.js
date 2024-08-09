import styled from "styled-components";
export const SignUpWrapper = styled.div`
  background-color: var(--primary-darkblue);
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
          padding-bottom: 10px;
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
      width: 320px;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding-bottom: 10px;
    @media (min-width: 576px) {
      gap: 30px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .modalWrap {
    border: 1px solid var(--blue);
    border-radius: 13px;
    background-color: var(--white);
    position: relative;
    z-index: 1;
    margin: -10px 10px 10px;
    min-height: 200px;
    text-align: center;
    cursor: pointer;
    figure {
      img {
        padding: 20px 0;
        margin: 0 auto;
      }
    }
    h3 {
      color: var(--light-green);
      font-weight: 600;
    }
    span {
      font-size: 18px;
      line-height: 24px;
      color: var(--black);
    }
  }
`;
export const ProfileWrap = styled.div`
  background-color: var(--primary-darkblue);
  color: var(--white);
  padding: 80px 0;
  .container {
    max-width: 1574px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .profile {
      padding-bottom: 20px;
      button {
        display: block;
        margin: 0 auto;

        &:hover {
          border-bottom: 1px solid var(--white);
          transition: all ease-in 0.3s;
        }
      }
      img {
        width: 165px;
        height: 165px;
        border-radius: 50%;
        margin: 0 auto 15px;
      }
    }
    form {
      width: 100%;
      max-width: 1574px;
      .selectHolder {
        display: flex;
        flex-direction: column;
        label {
          width: 100%;
          padding: 0;
          font-size: 16px;
          font-weight: 500;
          line-height: 120%;
          color: var(--matte-black);
          z-index: 5;
          display: flex;
          margin-bottom: 10px;
        }
        select {
          padding: 12px 25px;
          background-color: transparent;
          border-radius: 10px;
          border: 1px solid;
          outline: none;
          box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
          color: var(--body-text-25);
          position: relative;
          box-sizing: border-box;
          width: 100%;
          margin-bottom: 15px;
        }
        option{
          background-color: transparent;
        }
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        padding-bottom: 30px;
        @media (min-width: 576px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      .btn {
        button {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
`;