import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Modal, AboutD, Collaborators } from "./styles";
import Client from "../../assets/client.png";
import Facebook from "../../assets/icon_facebook.png";
import Instagram from "../../assets/icon_instagram.png";
import Gmail from "../../assets/icon_gmail.png";

export default function About() {
    return(
        <Container>
            <Header />

            <Modal>
                <div className="texts">
                    <h1>YouGo! App</h1>
                    <p>Lorem ipsum dolor sit amet. Et provident dolore ut dolorem quae ut vero accusamus qui doloremque deserunt ut quos ipsam.</p>
                    <button><a href="/contact">ENTRE EM CONTATO</a></button>
                </div>
            </Modal>

            <AboutD>
                <h1>Sobre Nós</h1>

                <div className="texts">
                    <div className="text">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Aut eligendi nihil aut voluptatum quia ut dolores quia aut possimus dolorum. Ad asperiores commodi ut autem quibusdam vel amet doloribus ut nulla accusantium qui odio architecto. Sit aperiam labore et soluta neque eos similique nesciunt et iure magni aut maiores suscipit nam quas libero. Et doloribus veniam et exercitationem ducimus non nihil distinctio et similique sunt ab animi quis ut quam itaque At enim officiis.<br/>Aut eligendi nihil aut voluptatum quia ut dolores quia aut possimus dolorum. Ad asperiores commodi ut autem quibusdam vel amet doloribus ut nulla accusantium qui odio architecto. Sit aperiam labore et soluta neque eos similique nesciunt et iure magni aut maiores suscipit nam quas libero. Et doloribus veniam et exercitationem ducimus non nihil distinctio et similique sunt ab animi quis ut quam itaque At enim officiis.</p>
                    </div>
                    <div className="container-card">
                        <div className="card">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Aut eligendi nihil aut voluptatum quia ut dolores quia aut possimus dolorum. Ad asperiores commodi ut autem quibusdam vel amet doloribus ut nulla accusantium qui odio architecto. Sit aperiam labore et soluta neque eos similique nesciunt et iure magni aut maiores suscipit nam quas libero.</p>
                        </div>
                        <div className="card">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Aut eligendi nihil aut voluptatum quia ut dolores quia aut possimus dolorum. Ad asperiores commodi ut autem quibusdam vel amet doloribus ut nulla accusantium qui odio architecto. Sit aperiam labore et soluta neque eos similique nesciunt et iure magni aut maiores suscipit nam quas libero.</p>
                        </div>
                    </div>
                </div>
            </AboutD>

            <Collaborators>
                <div className="card">
                    <h1>Colaboradores</h1>
                    <div className="container-card">
                        <div className="card-colaborador">
                            <img src={Client} alt="Foto do Cliente" />
                            <h2>Nome do Colaborador</h2>
                            <p>Título do Colaborador</p>
                            <div className="icons">
                                <img src={Facebook} alt="Foto do Facebook" />
                                <img src={Instagram} alt="Foto do Instagram" />
                                <img src={Gmail} alt="Foto do Gmail" />
                            </div>
                            <p>Lorem ipsum dolor sit amet. Et aperiam consequatur nam assumenda voluptatem sit laudantium molestiae et atque molestias vel perspiciatis internos sed enim facere et officia accusantium. Et voluptatum consequatur eum culpa maiores sit commodi consectetur quo libero illum.</p>
                        </div>

                        <div className="card-colaborador">
                            <img src={Client} alt="Foto do Cliente" />
                            <h2>Nome do Colaborador</h2>
                            <p>Título do Colaborador</p>
                            <div className="icons">
                                <img src={Facebook} alt="Foto do Facebook" />
                                <img src={Instagram} alt="Foto do Instagram" />
                                <img src={Gmail} alt="Foto do Gmail" />
                            </div>
                            <p>Lorem ipsum dolor sit amet. Et aperiam consequatur nam assumenda voluptatem sit laudantium molestiae et atque molestias vel perspiciatis internos sed enim facere et officia accusantium. Et voluptatum consequatur eum culpa maiores sit commodi consectetur quo libero illum.</p>
                        </div>
                    </div>
                </div>
            </Collaborators>

            <Footer />
        </Container>
    );
};