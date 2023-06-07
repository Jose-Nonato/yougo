import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Text, Cards } from "./styles";

export default function Tutorial() {
    return(
        <Container>
            <Header />

            <Text>
                <h1>Tutoriais de Acesso</h1>
                <p>Caso tenha dúvidas para acessar nosso aplicativo assista os vídeos a seguir para sanar suas dúvidas.</p>
            </Text>

            <Cards>

                <div className="card">
                    <span>IOS</span>
                    <h2>Saiba como instalar nosso app em seu IOS</h2>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/IluUDKKYjB8" title="Vídeo do Youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="card">
                    <p>Android</p>
                    <h2>Saiba como instalar nosso app em seu Android</h2>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/IluUDKKYjB8" title="Vídeo do Youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>

            </Cards>

            <Footer />
        </Container>
    );
};