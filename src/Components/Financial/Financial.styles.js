import styled from "styled-components";
export const FinancialWrap = styled.div`
  width: 100%;
  display: block;
  @media (min-width: 1200px) {
    display: flex;
    gap: 10px;
  }
  .financial {
    width: 100%;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
    .filterWrap {
      display: flex;
      gap: 10px;
      @media (min-width: 992px){
        gap: 20px;
      }
      button{
        width: 215px;
        display: flex;
        gap: 10px;
        &:nth-child(2){
            width: 100px;
        }
      }
    }
    span {
      color: var(--gray-30);
    }
  }
  .detail {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    @media (min-width: 992px){
        gap: 20px;
    }
    .check{
        width: 33px;
        height: 33px;
        border-radius: 10px;
    }
   .management {
      width: 100%;
      background-color: var(--white);
      border-radius: 25px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
     
      .timeHolder {
        display: flex;
        gap: 20px;
        span {
          display: flex;
          gap: 5px;
          align-items: center;
          font-size: 15px;
          color: var(--gray-30);
          img{
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  }
  h4{
        margin-bottom: 0;
      }
      .btn{
        display: flex;
        justify-content: end;
      }
`;
