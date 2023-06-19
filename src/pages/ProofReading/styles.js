import styled from "styled-components";

export const Container = styled.div`
    color: #606060;
`;

export const Destribution = styled.div`
    text-align: center;

    h1 {
        margin: 10px;
    }

    p {
        margin: 10px;
    }

    .container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .buttons {
            display: flex;
            flex-direction: column;
        }
    
        img {
            width: 30%;

            @media (max-width: 768px) {
                display: none;
            }
        }
    }
`;