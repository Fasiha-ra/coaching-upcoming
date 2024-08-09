import styled from "styled-components";
export const SessionCardWrap = styled.div`
  .cardHold {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      flex-wrap: nowrap;
    }
    figure {
      /* margin: 0 auto; */
      position: relative;
      img{
        width: 392px;
        height: 240px;
      }
    }
    blockquote {
      margin: 10px;
      padding: 0;

      q {
        font-style: normal;
        quotes: none;
        font-size: 20px;
        line-height: 24px;
        @media (min-width: 992px) {
          font-size: 23px;
          line-height: 27px;
        }
      }
      cite {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 0;
        span {
          font-size: 18px;
          line-height: 22px;
          @media (min-width: 992px) {
            font-size: 20px;
            line-height: 24px;
          }
        }
        img {
          width: 22px;
          height: 22px;
        }
      }
    }
    .iconBtn {
      display: flex;
      gap: 20px;
      align-items: center;
      @media (max-width: 768px) {
        position: absolute;
        right: 0;
        background-color: var(--blue);
        padding: 5px 10px;
        border-radius: 20px;
        gap: 10px;
        a {
          color: var(--white);
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: end;
  }
`;
