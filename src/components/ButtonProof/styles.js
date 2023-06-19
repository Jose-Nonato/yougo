import styled from "styled-components";

export const Button = styled.button`
    border: none;
    padding: 10px;
    border-radius: 10px;
    background-color: #6C1F77;
    cursor: pointer;
    margin: 10px 5px;

    @media (max-width: 768px) {
        font-size: 20px;
        margin: 15px 10px;
    }

    a {
        text-decoration: none;
        color: #f6f6f6;
        font-weight: 600;
    }
`;