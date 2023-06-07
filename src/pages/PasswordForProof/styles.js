import styled from "styled-components";

export const Container = styled.div``;

export const Password = styled.div`
    width: 100vw;
    height: 100vh;
    background: #6C7A89;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #FFF;
        border-radius: 15px;
        padding: 10px;
        box-shadow: 3px 3px 8px rgba(0,0,0,0.5);

        h1 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 8px;
        }

        input {
            width: 90%;
            margin: 0 auto;
            padding: 5px;
            outline: none;
            background-color: #F5F5F5;
            border: 1px solid gray;
            border-radius: 10px;
            text-align: center;
        }

        button {
            margin: 10px auto;
            border: none;
            padding: 5px;
            width: 50%;
            border-radius: 10px;
            background-color: #26CC4C;
            color: #FFF;
            font-weight: 700;
            cursor: pointer;
        }

        a {
            text-decoration: none;
            color: #000;
        }
    }
`;