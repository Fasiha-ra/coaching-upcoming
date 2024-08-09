import styled, { css } from "styled-components";
export const HeaderWrap = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 576px) {
      padding: 0;
    } 
    .logo{
      display: flex;
      align-items: center;
    }
      .mainLogo {
        width: 63px;
        height: 22px;
        @media (min-width: 576px) {
          width: 80px;
          height: 29px;
        }
        @media (min-width: 1200px) {
          width: 105px;
        }
      }
    }
  
  .hamburgerWrapper {
    width: 36px;
    height: 29px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 82px;
    cursor: pointer;
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;
export const NavigationWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1440px) {
    gap: 30px;
  }
  li {
    .item {
      transition: all ease-in 0.3s;
      color: var(--black);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      @media (min-width: 576px){
        font-size: 20px; 
        gap: 30px;
      }
      @media (max-width: 991px) {
        display: inline-flex;
        align-items: center;
      }
      @media (min-width: 992px) {
        color: black;
        font-size: 14px;
        display: block;
      }
      .icons {
        font-size: 26px;
        text-align: center;
        img{
          margin: 0 auto;
        }
      }
    }
    a {
      display: flex;
      align-items: center;
    }

    .active {
      .item {
        color: var(--primary-text-color);
      }
      .icons {
        width: 30px;
        height: 30px;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    transition: 0.3s all ease-in-out;
    margin-top: 26px;
    top: 91px;
    max-height: 0px;
    right: 0;
    padding: 5px;
    border-radius: 0px;
    background: var(--gray-50);
    opacity: 0;
    overflow: hidden;
    ${({ $navActive }) =>
      $navActive &&
      css`
        top: 52px;
        max-height: 1000px;
        visibility: visible;
        opacity: 1;
        padding: 50px 100px ;
        position: fixed;
        width: 100%;
      `}
  }
`;
export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: green;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }
`;
