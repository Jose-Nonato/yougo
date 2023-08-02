import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Container, Destribution } from "./styles";

import Player from "../../components/Player/Player";

import HeadPhone from "./assets/headphone.png";

import AnneFrank from "../../data/assets/anne.png";
import Habitos from "../../data/assets/habitos.png";
import JaneEyre from "../../data/assets/jane_eyre.png";
import OSegredo from "../../data/assets/o_segredo.png";
import OrgulhoPreconceito from "../../data/assets/org_precon.png";
import RapidoDevagar from "../../data/assets/rapido_devagar.jpg";
import Sapien from "../../data/assets/sapiens.jpg";
import Story from "../../data/assets/story.png";

export default function Reading() {
    return(
        <Container>
            <Header />

            <Destribution>

                <div className="text-sup">
                    <img src={HeadPhone} alt="Head Phone"/>
                    <h2>Sinta a experiência de fazer parte do nosso universo!</h2>
                </div>

                <div className="container images">
                    <img src={AnneFrank} alt="Capa AnneFrank" />
                    <img src={Habitos} alt="Capa Habitos" />
                    <img src={JaneEyre} alt="Capa JaneEyre" />
                    <img src={OSegredo} alt="Capa OSegredo" />
                    <img src={OrgulhoPreconceito} alt="Capa OrgulhoPreconceito" />
                    <img src={RapidoDevagar} alt="Capa RapidoDevagar" />
                    <img src={Sapien} alt="Capa Sapien" />
                    <img src={Story} alt="Capa Story" />
                </div>

                <div className="card-container">
                    <div className="card-player">
                        <Player/>
                    </div>
                </div>
            </Destribution>

            <Footer />
        </Container>
    );
};