import styled from "styled-components";
export const AboutWrap = styled.div`
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--light-gray);
  }
  .textareaHolder{
    min-height: 300px;
    @media (min-width: 1440px){
        min-height: 400px;
    }
  }
  button{
    display: block;
    margin-left: auto;
  }
  .inputWrapper{
    display: block;
    span{
      color: red;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
