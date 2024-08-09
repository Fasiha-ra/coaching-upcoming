import styled from "styled-components";
export const SkillWrap = styled.div`
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--gray-50);
  }
  .managementWrap {
    width: 100%;
    background-color: transparent;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    min-height: 150px;
    border-radius: 10px;
    padding: 20px 50px 20px 25px;
    .flex {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
    }
    span {
      border: 1px solid;
      box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.37);
      padding: 10px 20px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
  }
  button {
    margin-top: 30px;
    display: block;
    margin-left: auto;
  }
  .inputHolder {
    input {
      color: var(--black);
    }
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
