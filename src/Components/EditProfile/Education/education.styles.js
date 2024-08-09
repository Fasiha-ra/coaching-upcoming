import styled from "styled-components";
export const EducationWrap = styled.div`
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--gray-50);
  }
  .textareaHolder {
    min-height: 300px;
    @media (min-width: 1440px) {
      min-height: 400px;
    }
  }

  .bton {
    background-color: var(--blue);
    padding: 10px 20px;
    display: block;
    margin-left: auto;
    font-size: 25px;
    color: var(--white);
    border-radius: 50%;
  }
  .flex{
    display: block;
   
    @media (min-width: 576px){
      display: flex;
      gap: 20px;
    }
  }
  input{
    color: var(--black);
  }
  .inputWrapper{
    display: block;
    p{
      color: red;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      display: block;
    }
  }
`;
