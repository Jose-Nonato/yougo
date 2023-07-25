import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Container, Destribution } from "./styles";

import Player from "../../components/Player/Player";

export default function Reading() {
    return(
        <Container>
            <Header />

            <Destribution>
                <Player/>
            </Destribution>

            <Footer />
        </Container>
    );
};