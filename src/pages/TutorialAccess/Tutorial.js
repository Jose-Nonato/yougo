import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Text } from "./styles";

import Passos from "./assets/Passos.png";
import PassosMobile from "./assets/PassosMobile.png";

export default function Tutorial() {
    return(
        <Container>
            <Header />

            <Text>
                <h1>Tutorial de Acesso</h1>
                <div className="img">
                    <img src={Passos} alt="Passo a Passo" className="img-one" />
                    <img src={PassosMobile} alt="Passo a Passo" className="img-two" />
                </div>
            </Text>

            <Footer />
        </Container>
    );
};