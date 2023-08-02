import styled from "styled-components";

export const Container = styled.div`
    color: #606060;
`;

export const Modal = styled.div`
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px 5px;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    .text {
        width: 40%;

        @media (max-width: 768px) {
            width: 80%;
            text-align: center;
        }

        img {
            width: 50%;
            padding: 10px 0px;
        }

        p {
            color: #FFF;
            font-size: 20px;
        }

        button {
            a {
                text-decoration: none;
                color: #FFF;
                font-size: 16px;
                font-weight: 600;
            }

            margin: 10px 0px;
            background-color: #26CC4C;
            color: #FFF;
            border: none;
            border-radius: 10px;
            padding: 10px;
            outline: none;
        }
    }

    img {
        width: 30%;

        @media (max-width: 768px) {
            width: 80%;
        }
    }
`;

export const Proposal = styled.div`
    padding: 20px;

    .texts {
        width: 40%;
        @media (max-width: 768px) {
            width: 80%;
        }
    }

    .icons {
        padding: 40px 0px;
        display: flex;
        justify-content: space-around;
        text-align: justify;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        .card-text {
            text-align: justify;
            padding: 0px 6px;
            margin: 10px;
            @media (max-width: 768px) {
                text-align: center;
            }
        }

        .icon {
            width: 30%;
            margin-bottom: 5px;

            @media (max-width: 768px) {
                width: 30%;
            }
        }
    }
`;

export const How = styled.div`
    /* background-color: #CA60C6; */
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    width: 90%;
    border-radius: 20px;
    margin: 0 auto;
    padding: 15px;
    color: #FFF;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);

    @media (max-width: 390px) {
        padding: 9px;
    }

    h1 {
        text-align: center;
    }

    .texts {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 15px;

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            padding: 5px;
        }
    }

    .text {
        width: 30%;
        @media (max-width: 768px) {
            width: 100%;
            padding: 5px;
        }
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

        @media (max-width: 768px) {
            flex-direction: column;
        }
        
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
                color: #BA00FC;
            }

            p {
                margin-bottom: 5px;
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

            @media (max-width: 768px) {
                margin-left: 0px;
                margin-top: 15px;
            }
        }
    }
`;

export const Doubts = styled.div`
    /* background-color: #CA60C6; */
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
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

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
        }

        .card {
            border-radius: 20px;
            box-shadow: 4px 4px 4px rgba(0,0,0,.25);
            width: 30%;
            padding: 20px;

            @media (max-width: 768px) {
                margin: 5px auto;
                width: 80%;

                .stars {
                    width: 45%;
                }
            }
        }

        /* .card {
            width: 40%;
            box-shadow: 4px 4px 4px rgba(0,0,0,.25);
            border-radius: 20px;
            padding: 10px 20px;

            @media (max-width: 768px) {
                margin-top: 5px;

                .stars {
                    width: 45%;
                }
            }
        } */
    }
`;