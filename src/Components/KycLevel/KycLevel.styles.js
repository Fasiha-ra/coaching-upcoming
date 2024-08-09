import styled from "styled-components";

export const StyledKycLevel = styled.div`
  width: 100%;
  max-width: 250px;
  position: relative;
  height: 10px;
  background: #EAEAEA;
  overflow: hidden;
  @media  (min-width: 768pxpx){
    max-width: 300;
    height: 20px;
  }
  @media  (min-width: 992px){
    max-width: 370;
    height: 30px;
  }
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ $level }) => $level + "%"};
    background: ${({ $bg }) =>$bg };
  }
`;
