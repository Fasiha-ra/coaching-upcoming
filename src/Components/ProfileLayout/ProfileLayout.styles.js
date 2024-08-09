import styled from "styled-components";

export const MainLayoutSection = styled.div`
  position: relative;
  background-color: #f6f6f6;

  .mainHeader {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .mainSidebarContent {
    padding-top: 70px;
    display: flex;
    justify-content: center;
    @media (min-width: 992px) {
      padding-top: 100px;
    }
    .mainSidebar {
      max-width: 300px;
      width: 100%;
      padding: 0 10px;
      z-index: 9;
      position: sticky;
      top: 88px;
      height: calc(100vh - 89px);
      padding-top: 30px;

      @media (min-width: 1440px) {
        max-width: 430px;
      }
    }
    .mainContent {
      width: 100%;
      padding: 10px 10px 0 10px;
      @media (min-width: 992px) {
        padding: 30px 10px 0 10px;
      }
    }
  }

  @media (max-width: 992px) {
    .mainSidebarContent {
      .mainSidebar {
        display: ${({ $sidebarVisible }) =>
          $sidebarVisible ? "block" : "none"};
        position: fixed;
        left: 0;
        top: 51px;
        overflow-y: auto;
        height: calc(100vh - 94px);
      }
    }
  }

  @media (min-width: 992px) {
    .mainSidebarContent {
      .mainSidebar {
        display: block;
        position: sticky;
        top: 88px;
      }
    }
  }
`;
