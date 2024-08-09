import styled from "styled-components";
export const SearchbarHolder = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (min-width: 768px){
    flex-wrap: nowrap;
    justify-content: center;
  }
  .search{
    display: flex;
    width: 100%;
  }
  .filter {
    button {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      width: 90px;
      @media (min-width: 768px){
        width: 150px;
      }
      @media (min-width: 1440px) {
        font-size: 20px;
        width: 202px;
      }
    }
  }
  .searchbar {
    width: 100%;
  }
  button{
    width: 140px;
@media (min-width: 992px){
    width: 207px;
}
  }
`;
