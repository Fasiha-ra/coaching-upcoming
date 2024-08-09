import styled from "styled-components";
export const PasswordWrap = styled.div`
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--gray-50);
  }

   button{
    display: block;
    margin-left: auto;
   }
   .bton{
    button{
        margin: 0;
    }
   }
   span{
    margin-bottom: 40px;
    display: block;
    a{
        color: var(--blue);
    }
   }
   input{
    color: var(--black);
  }
  .inputWrapper{
    display: block;
    span{
      color: red;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      display: block;
    }
  }
`;
