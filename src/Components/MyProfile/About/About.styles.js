import styled from "styled-components";
export const AboutWrap = styled.div`
 .flex{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
 }
  
  p{
    font-size: 16px;
    line-height: 24px;
    @media (min-width: 992px){
        font-size: 20;
        line-height: 30px;
    }
  }
`;
