import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import AcceptButton from './AcceptButton'
import RejectButton from './RejectButton'

import ScreenContext from '../contexts/ScreenContext'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    animation: 0.5s both fade;
`
const About = styled(AboutComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;


    min-height: calc(100vh - 40px);
    width: calc(100vw - 2*20px);
    padding-inline: 20px;
    padding-top: 40px;

    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    >${Wrapper}{
        gap: 40px;
    }
    #description{
        margin-top: 60px;
    }
    h1{
        text-decoration: underline;
    }
    h2{
        margin-block: 5px;
        text-align: center;
    }
    p{
        margin-block: 5px;
        padding-inline: 40px;

        text-align: justify;
        font-size: 17px;
    }
    a{
        color: white;
    }
    button{
        margin-top: 40px;
        margin-bottom: 32vh;
        padding-inline: 30px;
        zoom: 1.5;

        animation: 0.5s both fade;
    }
`

function AboutComponent({className, scrollAnimSpeed=1}) {
    const { changeScreen } = useContext(ScreenContext);

    useEffect(() => {
        requestAnimationFrame(animation);
    });

    const animation = () => {
        window.scrollTo(0, window.scrollY + scrollAnimSpeed);

        if(window.scrollY < document.body.scrollHeight - window.innerHeight) {
            requestAnimationFrame(animation);
        }
    };

    return (
        <div className={className}>
            <Wrapper>       
                <Wrapper>
                    <h1>Equipe do Prjeto</h1>
                    <h2>Álvaro Esteves Matos</h2>
                    <h2>Diêgo Pereira Xavier Celis de Oliveira</h2>
                    <h2>Kleber Henrique Oliveira Rodrigues</h2>
                    <h2>Léo Salles de Oliveira</h2>
                    <h2>Robson Moreira da Conceição</h2>
                    <h2>Waldir dos Santos</h2>
                </Wrapper>

                <Wrapper>
                    <h1>Programação</h1>
                    <h2>Álvaro Esteves Matos</h2>
                </Wrapper>

                <Wrapper id='description'>
                    <p>Este jogo faz parte de um Trabalho de Conclusão de Curso (TCC) da disciplina Engenharia de Computação da Universidade Virtual do Estado de São Paulo (UNIVESP) entregue no ano de 2023.</p>
                    <p>Este jogo é de código aberto. Sinta-se à vontade para usar, modificar e distribuir.</p>
                    <h3>GNU v3.0 <a href='https://github.com/AlvaroEMatos/tcc-game' target='_blank'>GitHub</a></h3>
                </Wrapper>
            </Wrapper>  

            <AcceptButton onClick={() => {changeScreen("Menu")}}>Voltar</AcceptButton>
        </div>
    );
    
}

export default About;