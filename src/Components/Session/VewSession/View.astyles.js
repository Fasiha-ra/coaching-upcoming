import styled from "styled-components";
export const ViewWrap = styled.div`
  .view {
    width: 100%;
    .sessionDetail {
      display: block;
      margin: 0 auto;

      @media (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 20px;
      }
      .textHolder {
        .subTitle {
          color: var(--blue);
          font-size: 18px;
          line-height: 22px;
          @media (min-width:992px){
            font-size: 20px ;
            line-height: 24px;
          }
        }
        h2 {
          font-size: 20px;
          line-height: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          @media (min-width: 1200px) {
            font-size: 28px;
            line-height: 32px;
          }
        }
        .flex {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          img {
            width: 20px;
            height: 20px;
          }
          span {
            font-size: 18px;
          line-height: 22px;
          @media (min-width:992px){
            font-size: 20px ;
            line-height: 24px;
          }

          }
        }
        .btns {
          display: flex;
          gap: 20px;
          button{
            width: 190px;
          }
        }
      }
      .thumb {
        img {
          width: 540px;
          margin: 0 auto;
          padding-top: 20px;

          @media (min-width: 1440px) {
            width: 740px;
            height: 483px;
          }
        }
      }
    }
    .sessionPara {
      margin: 20px 0;
      @media (min-width: 992px) {
        margin: 40px 0;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
    .Accordions {
      h4 {
        padding: 0 0 0 20px;
      }
    }
  }
`;
