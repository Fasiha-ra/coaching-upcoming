import styled from "styled-components";
export const AnalysisWrapper = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-bottom: 20px;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    strong {
      font-size: 19px;
      font-weight: 600;
      @media (min-width: 992px) {
        font-size: 23px;
      }
    }
    .filterWrap {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      @media (min-width: 992px) {
        gap: 20px;
      }
      button {
        width: 215px;
        display: flex;
        gap: 10px;
        border: 1px solid #ddd;
        &:nth-child(1) {
          width: 100px;
        }
      }
    }
    span {
      color: var(--gray-30);
    }
  }
  .wrap {
    display: block;
    gap: 10px;
    @media (min-width: 992px) {
      display: flex;
    }
    .progress {
      flex-grow: 1;
      background-color: var(--white);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      padding: 20px;
      margin-bottom: 20px;
      @media (min-width: 992px) {
        margin-bottom: 0;
      }
      .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 17px;
          color: var(--gray-30);
          @media (max-width: 768px) {
            br {
              display: none;
            }
          }
        }
      }
    }
    .hours {
      @media (max-width: 992px) {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .card {
        background-color: var(--white);
        margin-bottom: 20px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
        padding: 20px;
        .cardHead {
          display: flex;
          justify-content: space-between;
          gap: 5px;
          align-items: center;
          padding-bottom: 20px;
        }
      }
    }
    .progressWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      @media (min-width: 992px) {
        margin-bottom: 30px;
        
      }
      .title {
        width: 204px;
        margin-bottom: 0;
        @media (max-width: 992px) {
          width: inherit;
        }
      }
    }
  }
  .textWrap {
          color: var(--gray-30);
          margin-bottom: 0;
          @media (max-width: 992px) {
            font-size: 14px !important;
          }
        }
`;
