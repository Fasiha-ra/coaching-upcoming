import styled from "styled-components";
export const GroupSessionWrap = styled.div`
  .groupHolder {
    margin-bottom: 20px;
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
    padding: 20px 10px;
    border-radius: 13px;
    border-left: 4px solid #EEAB28;

    h5 {
      font-size: 15px;
      font-weight: 600;
      span {
        color: var(--primary-blue);
        text-decoration: underline;
      }
    }
  }
  .timeWrap {
    display: flex;
    justify-content: space-between;

    .time,
    .date {
      display: flex;
      gap: 10px;
      align-items: center;
      img{
        width: 22px;
        height: 22px;
      }
    }
  }
  .flex{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    .timeWrap{
      display: block ;
      .time{
        padding-bottom: 10px;
      }
    }
  }
`;
