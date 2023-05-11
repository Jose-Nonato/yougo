import styled from "styled-components";

export const Container = styled.div`
    color: #606060;
`;

export const Modal = styled.div`
    margin-top: 10px;
    background-color: #9300A0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .text {
        width: 40%;
        padding: 10px 0px;
        h1 {
            color: #26CC4C;
        }
        p {
            margin: 10px 0px;
            color: #FFF;
        }
        button {
            border: none;
            border-radius: 10px;
            padding: 10px 8px;
            background-color: #26CC4C;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            font-weight: 600;
            color: #FFF;
        }
    }
`;

export const Proposal = styled.div`
    padding: 20px;

    .texts {
        width: 40%;
    }

    .icons {
        padding: 15px 0px 10px 0px;
        display: flex;
        justify-content: space-around;
    }
`;

export const How = styled.div`
    background-color: #CA60C6;
    width: 90%;
    border-radius: 20px;
    margin: 0 auto;
    padding: 15px;
    color: #FFF;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);

    h1 {
        text-align: center;
    }

    .texts {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 15px;
    }
`;

export const Plans = styled.div`
    text-align: center;
    padding: 50px 10px;

    .title {
        margin-bottom: 45px;

        &::after {
            content: "";
            width: 50px;
            height: 3px;
            background-color: #CA60C6;
            display: block;
            margin: 1px auto;
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .card {
            background-color: #FFF;
            box-shadow: 4px 4px 4px rgba(0,0,0,.18);
            padding: 25px;
            border-radius: 15px;

            h3 {
                margin-bottom: 15px;
            }

            h1 {
                margin-bottom: 10px;
            }

            p {
                margin-bottom: 5px;
            }

            span {
                font-size: 16px;
            }

            button {
                margin-top: 25px;
                border: none;
                background-color: #26CC4C;
                color: #fff;
                width: 50%;
                border-radius: 10px;
                padding: 5px;
                font-weight: 600;
                cursor: pointer;
            }
        }

        .second-card {
            margin-left: 40px;
        }
    }
`;

export const Doubts = styled.div`
    background-color: #CA60C6;
    padding: 10px 50px;
    margin-top: 20px;

    h1 {
        text-align: center;
        color: #FFF;
    }
`;

export const Avaliation = styled.div`
    padding: 30px;

    h1 {
        text-align: center;
        padding-bottom: 30px;
    }

    .container-card {
        display: flex;
        justify-content: space-evenly;

        .card {
            width: 40%;
            box-shadow: 4px 4px 4px rgba(0,0,0,.25);
            border-radius: 20px;
            padding: 20px;
        }
    }
`;