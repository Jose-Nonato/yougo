import styled from "styled-components";

export const Container = styled.div`
    color: #606060;
`;

export const Image = styled.div`
    img {
        margin: 10px 0px;
        width: 100%;
        height: 100%;
    }
`;

export const Describe = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: justify;

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
        padding: 10px 0px;
    }
`;

// export const Modal = styled.div`
//     background-image: url(${ImageAbout});
//     background-repeat: no-repeat;
//     background-size: cover;
//     height: 80vh;

//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     color: #FFF;

//     .texts{
//         @media (max-width: 1024px) {
//             width: 80%;
//         }
//     }

//     h1 {
//         font-size: 40px;
//         padding-bottom: 15px;
//     }

//     p {
//         padding-bottom: 20px;   
//     }

//     a {
//         text-decoration: none;
//         color: #FFF;
//     }

//     button {
//         border: none;
//         border-radius: 10px;
//         padding: 10px 20px;
//         background-color: #26CC4C;
//         font-weight: 600;
//         font-size: 16px;
//     }
// `;

// export const AboutD = styled.div`
//     padding: 20px;

//     h1 {
//         text-align: center;
//         margin-bottom: 30px;
//     }
//     h1::after {
//         content: "";
//         width: 40px;
//         height: 3px;
//         background-color: #CA60C6;
//         display: block;
//         margin: 1px auto;
//     }

//     .texts {
//         display: flex;
//         justify-content: space-between;
//         /* width: 90%; */
//         margin: 0 auto;
//         text-align: justify;

//         @media (max-width: 768px) {
//             flex-direction: column;
//             justify-content: center;
//             text-align: center;
//             align-items: center;
//         }
//     }

//     .text {
//         width: 85%;
//     }

//     .container-card {
//         width: 90%;

//         .card {
//             background-color: #F5F5F5;
//             border-radius: 10px;
//             margin: 15px 0px;
//             padding: 20px;
//             box-shadow: 4px 4px 4px rgba(0,0,0,.25);
//         }
//     }
// `;

// export const Collaborators = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 15px;

//     .card {
//         background-color: #CA60C6;
//         width: 90%;
//         border-radius: 10px;
//         padding: 10px;
//         box-shadow: 4px 4px 4px rgba(0,0,0,0.25);

//         h1 {
//             text-align: center;
//             color: #FFF;
//         }
//         h1::after {
//             content: "";
//             width: 40px;
//             height: 3px;
//             background-color: #FFF;
//             display: block;
//             margin: 1px auto;
//         }

//         .container-card {
//             display: flex;
//             justify-content: space-evenly;
//             padding: 20px;

//             @media (max-width: 768px) {
//                 flex-direction: column;
//                 align-items: center;
//             }
//         }

//         .card-colaborador {
//             width: 40%;
//             background-color: #FFF;
//             border-radius: 10px;
//             padding: 15px;
//             box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
            
//             @media (max-width: 768px) {
//                 width: 85%;
//                 margin-top: 20px;
//             }

//             h2 {
//                 padding: 5px;
//             }

//             p {
//                 padding: 5px;
//             }

//             .icons img {
//                 margin-right: 8px;
//                 margin-bottom: 5px;
//             }
//         }
//     }
// `;