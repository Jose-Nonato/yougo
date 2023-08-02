import styled from "styled-components";

export const Container = styled.div`
    color: #606060;
`;

export const Texts = styled.div`
    padding: 20px;

    h1 {
        padding: 10px 0px;
    }

    h1::after {
        content: "";
        width: 50px;
        height: 5px;
        background-color: #CA60C6;
        border-radius: 10px;
        display: block;
    }

    p {
        padding-bottom: 5px;
    }
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    padding: 20px 5px;

    .card {
        padding: 10px;
        border-radius: 10px;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #28CA50;
            color: #FFF;
        }
    }

    .icon {
        width: 100px;
        height: 100px;
    }

    @media (max-width: 700px) {
        & {
            flex-direction: column;
        }
        .icon {
            width: 70px;
            height: 70px;
        }
    }
`;

export const Forms = styled.div`
    padding: 5px 0px 40px 0px;

    .card {
        /* background-color: #F5F5F5; */
        background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
        color: #FFF;
        width: 70%;
        border-radius: 20px;
        padding: 20px 40px;
        box-shadow: 4px 4px 4px rgba(0,0,0,.18);
        margin: 0 auto;

        h2 {
            padding: 10px 0;

            @media(max-width: 700px) {
                padding: 0px;
                text-align: center;
            }
        }

        .info {
            display: flex;

            input {
                border: none;
                width: 100%;
                padding: 10px 15px;
                outline: none;
                margin: 15px;
                border-radius: 5px;
            }
        }

        .textarea {
            display: flex;
            justify-content: center;

            textarea {
                border: none;
                outline: none;
                width: 100%;
                border-radius: 5px;
            }
        }

        button {
            width: 40%;
            margin-top: 20px;
            border: none;
            background-color: #28CA50;
            padding: 10px 20px;
            color: #F5F5F5;
            font-weight: 600;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;

            
            @media(max-width: 700px) {
                width: 100%;
            }
        }
    }
`;

export const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }

    .text {
        /* padding: 10px; */

        .major {
            width: 80%;
            padding-bottom: 30px;
            @media(max-width: 768px) {
                width: 90%;
                margin: auto;
            }
        }

        .major-second {
            width: 80%;
            @media(max-width: 768px) {
                width: 50%;
                margin: auto;
            }
        }

        img {
            @media(max-width: 768px) {
                width: 80%;
            }
        }
    }
`;
