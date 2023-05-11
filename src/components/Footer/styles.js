import styled from "styled-components";

export const FooterD = styled.footer`
    width: 100%;

    .superior {
        background-color: #EDEDED;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 25px;

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }

        .direitaSuperior {
            button {
                background-color: #26CC4C;
                border: none;
                border-radius: 20px;
                padding: 10px 15px;
                margin-top: 10px;
                cursor: pointer;
            }
            a {
                text-decoration: none;
                color: #FFF;
                font-weight: 600;
            }
        }

        .centroSuperior {
            text-align: center;

            h3 {
                margin-bottom: 10px;
            }
            a {
                text-decoration: none;
                color: black;
            }

            @media (max-width: 768px) {
                margin-top: 15px;
                margin-bottom: 15px;
            }
        }

        .esquerdaSuperior {
            text-align: center;

            h3 {
                margin-bottom: 10px;
            }
            p {
                margin-bottom: 5px;
            }

            img {
                width: calc(100% / 3);
            }
        }
    }

    .inferior {
        background-color: #D0D0D0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }

        .centroInferior {
            text-align: center;
        }
    }
`;