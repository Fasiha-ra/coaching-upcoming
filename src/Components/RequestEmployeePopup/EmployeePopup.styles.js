import styled from "styled-components";
export const EmployeeWrap = styled.div`
  text-align: center;
  padding: 20px 30px;
  img {
    display: block;
    margin: 0 auto;
  }
  h5 {
    color: var(--gray-30);
  }
  .heading {
    padding-bottom: 40px;
    span {
      font-size: 16px;
      color: var(--blue);
      @media (min-width: 992px) {
        font-size: 18px;
      }
    }
  }
  .sessions {
    text-align: left;
    padding-bottom: 40px;
    .flex{
        display: flex;
        justify-content: start;
        gap: 30px;
        span{
            display: flex;
            gap: 10px;
            align-items: center;
            color: var(--gray-30);
            img{
                width: 16px;
                height: 16px;
            }
        }
    }
  }
  .btnWrap{
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .acceptLogo{
    padding-bottom: 40px;
    img{
        padding-bottom: 20px;
    }
    h2{
        color:#34A853 ;
    }
  }
  .reject{
    h2{ 
      color: red;
      padding-bottom: 30px;
    }
    h4{
      margin-bottom: 20px;
    }
    .text{
      width: 100%;
      max-width: 510px;
      height: 150px;
      border: 1px solid red;
      margin-bottom: 20px;
    }
  }
`;
