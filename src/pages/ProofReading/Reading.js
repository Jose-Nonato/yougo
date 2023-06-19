import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Container, Destribution } from "./styles";
import ButtonProof from "../../components/ButtonProof/ButtonProof";

import ImageBook from "../../assets/image_book.png";

export default function Reading() {
    return(
        <Container>
            <Header />

            <Destribution>
                <h1>Demonstração Gratuita</h1>
                <p>Aqui está alguns ebooks liberados para você gratuitamente!</p>
                <div className="container">
                    <div className="buttons">
                        <ButtonProof nome="Café da manhã - Receitas Fitness" link="https://www.yougoapp.com.br/wp-content/uploads/2023/01/Cafe-da-manha-Receitas-fitness.pdf"/>
                        <ButtonProof nome="Como Aprender Inglês com Músicas" link="https://www.yougoapp.com.br/wp-content/uploads/2023/01/Como-Aprender-Ingles-Com-Musicas.pdf"/>
                        <ButtonProof nome="Como Superar a Ansiedade" link="https://www.yougoapp.com.br/wp-content/uploads/2023/01/Como-superar-a-ansiedade.pdf" />
                        <ButtonProof nome="Detox Natural" link="https://www.yougoapp.com.br/wp-content/uploads/2023/01/Detox-Natural.pdf" />
                        <ButtonProof nome="Dicas de Saúde Comprovadas PT" link="https://www.yougoapp.com.br/wp-content/uploads/2023/01/Dicas-de-Saude-Comprovadas-PT.pdf" />
                        <ButtonProof nome="Meditação para a Vida Cotidiana" link="https://www.yougoapp.com.br/wp-content/uploads/2023/01/Meditacao-para-uma-vida-cotidiana.pdf" />
                        <ButtonProof nome="Mindset" link="https://www.yougoapp.com.br/wp-content/uploads/2023/01/Mindset.pdf" />
                    </div>
                    <img src={ImageBook} alt="Imagem"/>
                </div>
            </Destribution>

            <Footer />
        </Container>
    );
};