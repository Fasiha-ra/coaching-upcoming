import styled from "styled-components";
export const DropdownWrap = styled.div`
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
    max-width: ${({ $width }) => $width && $width};
    width: 100%;
    border-radius: 10px;
    background-color: transparent;
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
`;