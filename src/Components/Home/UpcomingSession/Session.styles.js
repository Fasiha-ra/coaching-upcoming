import styled from "styled-components";
export const SessionWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-left: 5px solid var(--primary-blue);
  margin-bottom: 20px;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    span {
      color: var(--blue);
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .sessionHolder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    .name{
        color: var(--blue);
      }
    .imgHolder {
      img {
        padding-top: 10px;
      }
      
    }
    .imgHolder,
    .textHolder {
      margin: 0 auto;
    }
    .textHolder {
      .nameWrapper {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;
      }
    }
    .btnWrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      .timeHolder {
        display: flex;
        gap: 10px;
        .date,
        .time {
          color: #878787;
          display: flex;
          align-items: center;
          gap: 10px;
          img{
            width: 16px;
            height: 16px;
          }
        }
      }
     
    }
  }
`;
