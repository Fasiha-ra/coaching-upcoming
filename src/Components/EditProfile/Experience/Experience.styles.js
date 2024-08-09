import styled from "styled-components";
export const ExperienceWrap = styled.div`
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--gray-50);
  }
  .textareaHolder {
    min-height: 175px;
  }
  .bton{
        background-color: var(--blue);
        padding: 10px 20px;
        display: block;
        margin-left: auto;
        font-size: 25px;
        color: var(--white);
        border-radius: 50%;
      }
  .inputHolder {
    input {
      color: var(--black);
    }
  }
  label {
    padding-bottom: 20px;
  }
  select {
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.37);
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    color: var(--body-text-25);
    position: relative;
    box-sizing: border-box;
    margin: 15px 0;
    padding: 8px 50px 8px 25px;
    outline: none;
  }
  .dropdown-container {
    position: relative;
    display: inline-block;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  .dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.37);
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    color: var(--body-text-25);
    position: relative;
    box-sizing: border-box;
    margin: 15px 0;
    padding: 8px 50px 8px 25px;
    outline: none;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 10;
    padding: 10px;
  }

  .dropdown-option {
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
  }

  .dropdown-option:last-child {
    margin-bottom: 0;
  }

  .checkbox {
    margin-right: 10px;
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
