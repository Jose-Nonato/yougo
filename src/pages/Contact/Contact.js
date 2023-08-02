import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Texts, Cards, Forms, Images } from "./styles";

import Adress_Rafiki from "./assets/Address_Rafiki.png";
import Address from "./assets/Address.png";
import CellPhone from "./assets/CellPhone.png";
import Mail from "./assets/Mail.png";

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
                        {/* <ShareLocation className="icon"/> */}
                        <img src={Adress_Rafiki} alt="Adress" className="icon"/>
                        <p>Edifício Cirilo Rio, 3º andar<br/>
                        Campina - Rua Senador Manoel<br/>
                        Barata, 925 - Belém/PA.</p>
                    </div>
                    <div className="card">
                        {/* <Phone className="icon"/> */}
                        <img src={CellPhone} alt="Cell Phone" className="icon"/>
                        <p>(11) 91555-5376</p>
                    </div>
                    <div className="card">
                        {/* <Email className="icon"/> */}
                        <img src={Mail} alt="Mail" className="icon" />
                        <p>atendimentoaocliente@yougoapp.com.br</p>
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
                    <div className="text">
                        <div className="major">
                            <h1>Aeroporto Santos Dumont Rio de Janeiro</h1>
                            <p>Stand 1 - térreo do aeroporto, ao lado do check in da azul linhas aéreas.</p>
                            <p>Stand 2 - corredor do aeroporto no segundo andar próximo a entrada do embarque doméstico.</p>
                        </div>
                        <div className="major">
                            <h1>Aeroporto de Belém</h1>
                            <p>Stand 1 - área externa na frente do check in das companhias aéreas.</p>
                            <p>Stand 2 - área restrita do aeroporto, ao lado do portão de embarque 4.</p>
                        </div>
                    </div>
                    <div className="text">
                        <div className="major-second">
                            <h1>Aeroporto Congonhas de São Paulo</h1>
                            <p>Stand 1 - Saguão principal - Embaixo da escada rolante.</p>
                        </div>
                        <div>
                            <img src={Address} alt="Address" className="image" />
                        </div>
                    </div>
                </Images>

            <Footer />
        </Container>
    );
};