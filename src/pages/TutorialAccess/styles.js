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
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card {
        width: 60%;
        margin: 40px 10px;
        text-align: center;

        @media(max-width: 700px) {
            & {
                width: 90%;
            }
        }

        h2 {
            padding: 10px;
        }

        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* Proporção do vídeo (16:9) */
            height: 0;
            overflow: hidden;
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`;