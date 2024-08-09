import styled from "styled-components";
export const SessionWrapper = styled.div`
  width: 100%;
  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      color: var(--blue);
      display: flex;
      align-items: center;
      gap: 10px;
      
    }
  }
  .cardHold {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    @media (min-width: 992px){
      flex-wrap: nowrap;
    }
  }
  .sessonCard {
    background-color: #fff;
    border: 1px solid var(--gray-50);
    width: 310px;
    position: relative;
    figure {
      position: relative;
      img {
        width: 100%;
      }
    }
    .iconBtn {
      background-color: var(--blue);
      display: flex;
      gap: 20px;
      justify-content: center;
      padding: 10px;
      border-radius: 40px;
      width: 128px;
      position: absolute;
      top: 9px;
      right: 0;
      a {
        color: var(--white);
      }
    }
    .text {
      padding: 10px;
    }
    .flexx {
      display: flex;
      gap: 20px;
      padding-bottom: 20px;
      img {
        width: 21px;
        height: 21px;
      }
    }
  }
`;
