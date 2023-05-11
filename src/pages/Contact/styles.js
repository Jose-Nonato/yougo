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
`;

export const Forms = styled.div`
    padding: 5px 0px 40px 0px;

    .card {
        background-color: #F5F5F5;
        width: 70%;
        border-radius: 20px;
        padding: 20px 40px;
        box-shadow: 4px 4px 4px rgba(0,0,0,.18);
        margin: 0 auto;

        h2 {
            padding: 10px 0;
        }

        .info {
            display: flex;
            justify-content: space-evenly;
            
            input {
                width: 40%;
                padding: 10px 15px;
                outline: none;
                margin: 15px;
            }
        }

        .textarea {
            display: flex;
            justify-content: center;

            textarea {
                outline: none;
                width: 90%;
            }
        }

        button {
            width: 30%;
            margin-top: 20px;
            border: none;
            background-color: #28CA50;
            padding: 10px 20px;
            color: #F5F5F5;
            font-weight: 600;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
`;

export const Images = styled.div`
    padding: 20px;

    h1 {
        padding: 20px 0px;
        &::after {
            content: "";
            width: 60px;
            height: 5px;
            background-color: #CA60C6;
            border-radius: 10px;
            display: block;
        }
    }

    .teste {
        display: flex;
        justify-content: space-evenly;
    }
`;