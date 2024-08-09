import styled from "styled-components";
export const AddedSessionWrap=styled.div`
.heading{
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 20px;
}
.card{
    text-align: center;
    border-radius: 0;
    padding: 0;
    .cardHeading{
        background-color: var(--blue);
        padding: 10px;
        color: var(--white);
        margin-bottom: 0;
    };
    ul{
        padding: 10px;
       li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            font-size: 18px;
            line-height: 22px;
            @media (min-width:992px){
                font-size: 20px; 
                line-height: 24px;
            }
        }
       }
    }
}

`;