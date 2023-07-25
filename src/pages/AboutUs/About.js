import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Image, Describe } from "./styles";
import Amico from "./assets/About.png";

export default function About() {
    return(
        <Container>
            <Header />

            <Image>
                <img src={Amico} alt="Imagem Sobre"/>
            </Image>

            <Describe>
                <h1>Sobre Nós</h1>
                <p>Somos o seu aplicativo mais completo, criao com base na demanda social por velocidade e eficiência. Aqui na You Go!, proporcionamos a você uma experiência de consumo de conteúdo de alta qualidade, de forma rápida e efetiva.</p>
                <p>Imagine-se sempre à frente, pronto para encarar novos desafios e encarar o desconhecido. Esse é o nosso objetivo principal. Queremos impulsionar você rumo ao sucesso, oferecendo cursos abrangentes que permitem aprender novas habilidades. expandir seus horizonte e se destacar em qualquer campo que escolher.</p>
                <p>Mas não paramos por aí. Queremos que você possa viajar no mundo das palavras a qualquer momento, em qualquer lugar. Por isso, disponibilizamos um extensa biblioteca de ebooks para você ler e ampliar o seu conhecimento. </p>
                <p>E como amantes da literatura, entendemos a importância de resenhas críticas bem estruturadas. Por isso, reunimos uma equipe de apaixonados por livros, que compartilham suas análises e opiniões sobre as mais diversas obras literárias. Dessa forma, você pode desfrutar de resenhas confiáveis e detalhadas, ajudando-o a descobrir novas leituras que combinam com seus gostos e interesses.</p>
                <p>Na You Go!, acreditamos que informação é poder. Queremos capacitar você com conhecimento e entretenimento, proporcionando uma experiência única e enriquecedora. Então, embarque nessa jornada conosco onde a aventura e o aprendizado estão ao alcance de um toque.</p>
                <p style={{margin: "10px 0px"}}><strong>Seja o protagonista da sua própria história na You Go!</strong></p>
            </Describe>

            <Footer />
        </Container>
    );
};