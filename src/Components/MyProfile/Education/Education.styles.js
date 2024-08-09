import styled from "styled-components";
export const EdcuationWrap = styled.div`
.flex{
    display: flex;
    gap: 10px;
    align-items: start;
    @media (min-width: 768px){
        gap: 30px;
    }
    figure{
        img{
            width: 60px;
            height: 60px;
        }
    }
    .text{
        color: var(--gray-50);
        h4{
            font-weight: 500;
            margin-bottom: 5px;
        }
        p, span{
            font-weight: 400;
            color: var(--gray-50);
            font-size: 16px; 
            @media (min-width: 768px){
                font-size: 20px;
            }
            margin-bottom: 5px;
        }
    }
}
`;