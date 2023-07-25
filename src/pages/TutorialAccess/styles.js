import styled from "styled-components";

export const Container = styled.div`
    color: #606060;
`;

export const Text = styled.div`
    padding: 20px;

    h1:after {
        content: "";
        width: 50px;
        height: 3px;
        background-color: #CA60C6;
        display: block;
        margin-bottom: 10px;
    }

    .img {
        /* text-align: center; */
        display: flex;
        justify-content: center;

        .img-one {
            @media (max-width: 768px) {
                display: none;
            }
        }

        .img-two {
            display: none;

            @media (max-width: 768px) {
                display: block;
            }
        }

        img {
            width: 80%;

            @media (max-width: 768px) {
                width: 70%;
            }
        }
    }
`;
