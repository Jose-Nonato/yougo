import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Logo from "../../assets/logo.png";
import { Container, Modal, Proposal, How, Plans, Doubts, Avaliation } from "./styles";
import bem_icon from "../../assets/bem_icon.png";
import health_icon from "../../assets/health_icon.png";
import leitura_icon from "../../assets/leitura_icon.png";
import stream_icon from "../../assets/stream_icon.png";
import star_icon from "../../assets/star_icon.png";
import client from "../../assets/client.png";
import CardDropdownComp from "../../components/CardDropdown/CardDropdown";
import { Check } from "@styled-icons/boxicons-regular/Check";

export default function Home() {
    return(
        <Container>
            <Header/>

            <Modal>
                <div className="text">
                    <h1>YOU GO!</h1>
                    <p>LIBERTE SUA IMAGINAÇÃO E DESCUBRA UM MUNDO DE CONHECIMENTOS E ENTRETENIMENTOS NA PALMA DA SUA MÃO!</p>
                    <button><a href="/contact">QUERO SABER MAIS!</a></button>
                </div>
                <div className="imgs">
                    <h1>Imagem</h1>
                </div>
            </Modal>

            <Proposal>
                <div className="texts">
                    <p><i>Bem vindo a YouGo!</i></p>
                    <h1>Uma <span style={{color: "#9300A0"}}>experiência literária</span> facilitada com nosso APP!</h1>
                </div>
                <div className="icons">
                    <div className="card-text">
                        <img src={leitura_icon} alt="icone" />
                        <h3>Leitura</h3>
                        <p>Lorem ipsum dolor sit amet. Et odit dolor sit tempora temporibus eum rerum obcaecati id sint alias ut omnis pariatur eos accusantium modi non voluptas harum.</p>
                    </div>
                    <div className="card-text">
                        <img src={health_icon} alt="icone" />
                        <h3>Bem-Estar</h3>
                        <p>Lorem ipsum dolor sit amet. Et odit dolor sit tempora temporibus eum rerum obcaecati id sint alias ut omnis pariatur eos accusantium modi non voluptas harum.</p>
                    </div>
                    <div className="card-text">
                        <img src={stream_icon} alt="icone" />
                        <h3>Entretenimento</h3>
                        <p>Lorem ipsum dolor sit amet. Et odit dolor sit tempora temporibus eum rerum obcaecati id sint alias ut omnis pariatur eos accusantium modi non voluptas harum.</p>
                    </div>
                    <div className="card-text">
                        <img src={bem_icon} alt="icone" />
                        <h3>Saúde</h3>
                        <p>Lorem ipsum dolor sit amet. Et odit dolor sit tempora temporibus eum rerum obcaecati id sint alias ut omnis pariatur eos accusantium modi non voluptas harum.</p>
                    </div>
                </div>
            </Proposal>

            <How>
                <h1>Como funciona ?</h1>
                <div className="texts">
                    <div className="text">
                        <h1>1.</h1>
                        <h3>Assine um dos nossos planos</h3>
                        <p>Escolha o plano visitando uma de nossas lojas</p>
                    </div>
                    <div className="text">
                        <h1>2.</h1>
                        <h3>Baixe nosso aplicativo</h3>
                        <p>Acesse a loja de aplicativos do seu celular e baixe o nosso APP</p>
                    </div>
                </div>
                <div className="texts">
                <div className="text">
                        <h1>3.</h1>
                        <h3>Faça o login</h3>
                        <p>Entre com o seu usuário</p>
                    </div>
                    <div className="text">
                        <h1>4.</h1>
                        <h3>Desfrute do melhor conteúdo</h3>
                        <p>Leia os melhores livros, revistas, quadrinhos</p>
                    </div>
                </div>
            </How>

            <Plans>
                <h1 className="title">Conhecimento digital para o mundo real!</h1>
                <div className="container">
                    <div className="card">
                        <h3>Plano Anual</h3>
                        <h1>R$ XXX,XX<span> / mês</span></h1>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Vantagem a ser adicionada ...</p>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Vantagem a ser adicionada ...</p>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Vantagem a ser adicionada ...</p>
                        <button>ADQUIRIR</button>
                    </div>
                    <div className="card second-card">
                        <h3>Plano Anual</h3>
                        <h1>R$ XXX,XX<span> / mês</span></h1>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Vantagem a ser adicionada ...</p>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Vantagem a ser adicionada ...</p>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Vantagem a ser adicionada ...</p>
                        <button>ADQUIRIR</button>
                    </div>
                </div>
            </Plans>

            <Doubts>
                <h1>Dúvidas</h1>
                <CardDropdownComp title={"Dúvida frequente a ser adicionada ..."} description={"Lorem ipsum dolor sit amet. Et neque libero qui nobis veniam et illum necessitatibus? Qui velit eligendi et quas similique sit dolor harum aut ullam doloribus? Est nisi eius id Quis quas aut eaque deserunt eum voluptas nihil sit tempore numquam non inventore optio. Aut doloribus praesentium At sint quos est eaque officia sit quos recusandae hic galisum officiis qui soluta explicabo et expedita corporis."}/>
                <CardDropdownComp title={"Dúvida frequente a ser adicionada ..."} description={"Lorem ipsum dolor sit amet. Et neque libero qui nobis veniam et illum necessitatibus? Qui velit eligendi et quas similique sit dolor harum aut ullam doloribus? Est nisi eius id Quis quas aut eaque deserunt eum voluptas nihil sit tempore numquam non inventore optio. Aut doloribus praesentium At sint quos est eaque officia sit quos recusandae hic galisum officiis qui soluta explicabo et expedita corporis."}/>
                <CardDropdownComp title={"Dúvida frequente a ser adicionada ..."} description={"Lorem ipsum dolor sit amet. Et neque libero qui nobis veniam et illum necessitatibus? Qui velit eligendi et quas similique sit dolor harum aut ullam doloribus? Est nisi eius id Quis quas aut eaque deserunt eum voluptas nihil sit tempore numquam non inventore optio. Aut doloribus praesentium At sint quos est eaque officia sit quos recusandae hic galisum officiis qui soluta explicabo et expedita corporis."}/>
                <CardDropdownComp title={"Dúvida frequente a ser adicionada ..."} description={"Lorem ipsum dolor sit amet. Et neque libero qui nobis veniam et illum necessitatibus? Qui velit eligendi et quas similique sit dolor harum aut ullam doloribus? Est nisi eius id Quis quas aut eaque deserunt eum voluptas nihil sit tempore numquam non inventore optio. Aut doloribus praesentium At sint quos est eaque officia sit quos recusandae hic galisum officiis qui soluta explicabo et expedita corporis."}/>
            </Doubts>

            <Avaliation>
                <h1>Avaliações de Clientes</h1>
                <div className="container-card">
                    <div className="card">
                        <img src={client} alt="Cliente" />
                        <h2>Nome do Cliente</h2>
                        <p>Leitora há 3 anos.</p>
                        <img src={star_icon} alt="Estrelas" />
                        <p>Lorem ipsum dolor sit amet. Et aperiam consequatur nam assumenda voluptatem sit laudantium molestiae et atque molestias vel perspiciatis internos sed enim facere et officia accusantium. Et voluptatum consequatur eum culpa maiores sit commodi consectetur quo libero illum.</p>
                    </div>
                    <div className="card">
                        <img src={client} alt="Cliente" />
                        <h2>Nome do Cliente</h2>
                        <p>Leitora há 4 anos.</p>
                        <img src={star_icon} alt="Estrelas" />
                        <p>Lorem ipsum dolor sit amet. Et aperiam consequatur nam assumenda voluptatem sit laudantium molestiae et atque molestias vel perspiciatis internos sed enim facere et officia accusantium. Et voluptatum consequatur eum culpa maiores sit commodi consectetur quo libero illum.</p>
                    </div>
                </div>
            </Avaliation>

            <Footer/>
        </Container>
    );
};