import React, { useState, useContext} from 'react';
import styled from 'styled-components'
import AcceptButton from './AcceptButton'
//context
import ScreenContext from '../contexts/ScreenContext'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
const InicialMenu = styled(InicialMenuComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100vw;

    background-color: #5E4992;
    color: ${(props) => props.theme.color};

    ${Wrapper}#titleWrapper{
        width: 100%;
        height: 30vh;
        justify-content: center;
        background-color: ${(props) => props.theme.background};
    }
    ${Wrapper}#menuWrapper{
        height: 30vh;
        flex-direction: column;
        justify-content: center;
        gap: 50px;

        animation: 0.5s 0.5s both fade;
    }

    button{
        padding: 10px;
        padding-inline: 40px;
        zoom: 1.5;
    }

    h1, h2 {
        padding-inline: 20px;
        text-align: center;
    }
    h1{
        margin-top: 50px;
        font-size: 45px;
        padding-inline: 50px;

        animation: 1s grow2;
    }
    h2{
        margin-top: 10px;
        margin-bottom: 40px;

        padding-inline: 40px;
        
        animation: 0.5s 0.5s both fade;
    }
`

function InicialMenuComponent({className}) {
    const { changeScreen } = useContext(ScreenContext);

    return (
        <div className={className}>
            <Wrapper id='titleWrapper'>
                <h1>Aprendendo com Tecnologia</h1>
                
            </Wrapper>
            <h2>Um game para te ensinar sobre segurança da informação</h2>
            
            <Wrapper id='menuWrapper'>
                <AcceptButton onClick={()=>{changeScreen('Game')}} >Jogar</AcceptButton>
                <AcceptButton onClick={()=>{changeScreen('About')}}>Sobre</AcceptButton>
            </Wrapper>
        </div>
    );
    
}

export default InicialMenu;