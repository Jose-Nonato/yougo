import styled from "styled-components";

export const HeaderD = styled.header`
    /* width: 100%; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #9300A0;
    padding: 10px 15px;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    img {
        width: 8%;
        height: 8%;

        @media (max-width: 768px) {
            width: 20%;
            height: 20%;
            margin-bottom: 5px;
        }
    }

    .links {
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    }

    .links a {
        color: #FFF;
        text-decoration: none;
        font-size: 18;
        position: relative;
        padding: 0 10px;

        @media (max-width: 768px) {
            margin-bottom: 15px;
        }
    }
    .links a::after {
        content: "";
        position: absolute;
        background-color: #FFF;
        height: 3px;
        border-radius: 10px;
        width: 0;
        bottom: -10px;
        left: 0;
        transition: 0.3s;
    }
    .links a:hover::after {
        width: 100%;
    }
`;