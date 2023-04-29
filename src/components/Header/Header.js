import React from "react";
import { HeaderD } from "./styles";
import logo_branca from "../../assets/logo_branca.png";

export default function Header() {
    return(
        <HeaderD>
            <img src={logo_branca} alt="Logotipo Branca"/>
            <div className="links">
                <a href="/">Início</a>
                <a href="/about">Sobre Nós</a>
                <a href="/contact">Contato</a>
                <a href="/proof-reading">🔶Tutorial de Acesso</a>
                <a href="/tutorial-access">🔷Voucher de Leitura</a>
            </div>
        </HeaderD>
    );
};