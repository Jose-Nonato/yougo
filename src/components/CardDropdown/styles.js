import styled from "styled-components";

export const CardDropdown = styled.div`
    .card {
        background-color: #FFF;
        border-radius: 10px;
        margin: 10px 0px;
        cursor: pointer;

        h3 {
            padding: 10px;
        }
        img {
            padding: 8px;
        }
        .text {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .dropdown-menu {
        padding: 10px;
        background-color: #FFF;
    }
`;