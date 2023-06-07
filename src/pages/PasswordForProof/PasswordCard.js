import React, { useState } from "react";
// import Header from "../../components/Header/Header";
import { Container, Password } from "./styles";
import { useNavigate } from "react-router-dom";

export default function PasswordCard() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleButton = () => {
        if (password === 'yougo') {
            navigate('/proof-reading');
        } else {
            alert('Senha inválida!');
        }
    }

    return(
        <Container>
            {/* <Header/> */}
            <Password>
                <div className="card">
                    <h1>Bem vindo!</h1>
                    <p>Entre com a senha que lhe informaram.</p>
                    <input type="password" placeholder="ENTRAR COM A SUA SENHA" onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleButton}>ACESSAR</button>
                    <a href="/">Voltar para o Início</a>
                </div>
            </Password>
        </Container>
    );
}