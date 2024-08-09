import styled from "styled-components";
export const EarningWrap = styled.div`
  .heading {
    display: block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    padding-bottom: 20px;
  }
  .card {
    border-radius: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .textHolder{
        .text{
            display: block;
            padding-bottom: 10px;
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
        }
        .price{
            display: block;
            font-size: 20px;
            line-height: 24px;
            font-weight: 600;
        }
    }
  }
`;
