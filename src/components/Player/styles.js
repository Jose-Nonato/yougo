import styled from "styled-components";

export const Container = styled.div`
    img {
        width: 80%;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    button {
        border: none;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        color: #FFF;

        align-items: center;
    }
`;