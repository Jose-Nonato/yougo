import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Texts, Cards, Forms, Images } from "./styles";
import { ShareLocation, Phone, Email } from '@styled-icons/material';
import Aeroporto from "./assets/Aeroporto.png";
import Belem from "./assets/Belem.png";

export default function Contact() {
    return(
        <Container>
            <Header />

                <Texts>
                    <h1>Entre em Contato</h1>
                    <p>Tire suas dúvidas com nossa equipe especializada em tornar o seu atendimento rápido e prático.</p>
                </Texts>

                <Cards>
                    <div className="card">
                        <ShareLocation className="icon"/>
                        <p>Rua Pequena 102</p>
                    </div>
                    <div className="card">
                        <Phone className="icon"/>
                        <p>(91) 99999-9999</p>
                    </div>
                    <div className="card">
                        <Email className="icon"/>
                        <p>yougo@gmail.com</p>
                    </div>
                </Cards>

                <Forms>
                    <div className="card">
                        <h2>Formulário de Contato</h2>
                        <div className="info">
                            <input type="text" placeholder="Seu Nome ..."/>
                            <input type="text" placeholder="Seu Email ..."/>
                        </div>
                        <div className="textarea">
                            <textarea id="w3review" name="w3review" rows="4" cols="90"></textarea><br/>
                        </div>
                        <button>ENVIAR</button>
                    </div>
                </Forms>

                <Images>
                    <h1>Onde nos encontrar ?</h1>
                    <div className="images-container">
                        <div className="texts-container">
                            <div className="text">
                                <h3>Aeroporto Santos Dumont Rio de Janeiro</h3>
                                <p>Stand 1 - térreo do aeroporto, ao lado do check in da azul linhas aéreas.<br/>Stand 2 - corredor do aeroporto no segundo andar próximo a entrada do embarque doméstico.</p>
                            </div>
                            <img src={Aeroporto} alt="Localização Aeroporto"/>
                        </div>
                        <div className="texts-container">
                            <img src={Belem} alt="Localização Belem"/>
                            <div className="text">
                                <h3>Aeroporto de Belém</h3>
                                <p>Stand 1 - área externa na frente do check in das companhias aéreas.<br/>Stand 2 - área restrita do aeroporto, ao lado do portão de embarque 4.</p>
                            </div>
                        </div>
                    </div>
                </Images>

            <Footer />
        </Container>
    );
};