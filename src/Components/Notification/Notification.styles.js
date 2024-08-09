import styled from "styled-components";
export const NotificationWrap = styled.div`
  width: 100%;
  display: block;
  @media (min-width: 1200px) {
    display: flex;
    gap: 10px;
  }
  .notification {
    width: 100%;
  }
  h3 {
    padding-bottom: 30px;
    font-weight: 600;
  }
  .tabs {
    padding-bottom: 30px;
  }
  .listed {
    display: flex;
    
    li {
      width: 100%;
      a {
        border-bottom: 1px solid var(--gray-30);
        color: var(--gray-30);
        display: flex;
        justify-content: center;
        font-size: 16px;
        @media (min-width: 768px){
            font-size: 20px;
        }
      }
      &:nth-child(1) {
        a {
          border-bottom: 1px solid var(--blue);
          color: var(--blue);
        }
      }
    }
  }
  .notiHolder {
    display: flex;
    gap: 10px;
    align-items: start;
    padding: 20px 10px;
    border-bottom: 1px solid var(--gray-30);
    @media (min-width: 768px){
        gap: 20px;
        padding: 20px;
    }
    h4 {
      margin-bottom: 0;
    }
    span {
      font-size: 14px;
      @media (min-width: 992px) {
        font-size: 17px;
      }
    }
    .btn{
        margin-top: 30px;
    }
  }
`;
