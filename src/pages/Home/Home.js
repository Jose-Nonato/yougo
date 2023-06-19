import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Modal, Proposal, How, Plans, Doubts, Avaliation } from "./styles";

import { Books } from "@styled-icons/icomoon/Books";
import { HeadphonesSoundWave } from "@styled-icons/fluentui-system-filled/HeadphonesSoundWave";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { RateReview } from "@styled-icons/material-sharp/RateReview";

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
                    <p>Você a frente!<br/>Aqui você tem acesso a cursos, ebooks, resenhas e muito mais na velocidade que o mundo atual exige. Desfrute conhecimento ilimitado na palma da sua mão!</p>
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
                        <Books className="icon" />
                        <h3>Leitura</h3>
                        <p>Descubra a facilidade de mergulhar em um oceano de conhecimento com o nosso app. Com ebooks cativantes ler e aprender nunca foi tão envolvente e acessível!</p>
                    </div>
                    <div className="card-text">
                        <HeadphonesSoundWave className="icon" />
                        <h3>Aúdiobooks</h3>
                        <p>Perceba as vantagens de ouvir ebooks e resenhas críticas, enquanto aproveita a conveniência e a liberdade de desfrutar do conhecimento onde quer que esteja. </p>
                    </div>
                    <div className="card-text">
                        <LearningApp className="icon" />
                        <h3>Cursos</h3>
                        <p>Abra portas para novas oportunidades e expanda seu repertório de habilidades com nossa seleção de cursos capacitantes. Tudo isso ao alcance de suas mãos com o nosso aplicativo.</p>
                    </div>
                    <div className="card-text">
                        <RateReview className="icon" />
                        <h3>Resenhas</h3>
                        <p>Satisfaça sua curiosidade literária e embarque em leituras extraordinárias com agilidade e praticidade do nosso aplicativo. Resenhas para você ler e ouvir e eleve sua experiência literária.</p>
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
                        <img className="stars" src={star_icon} alt="Estrelas" />
                        <p>Lorem ipsum dolor sit amet. Et aperiam consequatur nam assumenda voluptatem sit laudantium molestiae et atque molestias vel perspiciatis internos sed enim facere et officia accusantium. Et voluptatum consequatur eum culpa maiores sit commodi consectetur quo libero illum.</p>
                    </div>
                    <div className="card">
                        <img src={client} alt="Cliente" />
                        <h2>Nome do Cliente</h2>
                        <p>Leitora há 4 anos.</p>
                        <img className="stars" src={star_icon} alt="Estrelas" />
                        <p>Lorem ipsum dolor sit amet. Et aperiam consequatur nam assumenda voluptatem sit laudantium molestiae et atque molestias vel perspiciatis internos sed enim facere et officia accusantium. Et voluptatum consequatur eum culpa maiores sit commodi consectetur quo libero illum.</p>
                    </div>
                </div>
            </Avaliation>

            <Footer/>
        </Container>
    );
};