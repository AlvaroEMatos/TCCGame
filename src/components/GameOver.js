import React, {useContext} from 'react'
import styled from 'styled-components'
import AcceptButton from './AcceptButton'
import RejectButton from './RejectButton'

import ScreenContext from '../contexts/ScreenContext'


const GameOver = styled(GameOverComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;


    height: 100vh;
    width: 100vw;

    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};

    button{
        zoom: 1.5;
    }
    h2{
        animation: 0.5s 0.5s both fade;
    }
    h1{
        margin-top: 40vh;
        animation: 1s grow2;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;

    animation: 0.5s 0.5s both fade;
`

function GameOverComponent({className}) {
    const { changeScreen } = useContext(ScreenContext);

    return (
        <div className={className}>
            <h1>Você perdeu</h1>
            <h2>Quer jogar de novo?</h2>
            
            <Wrapper>
                <AcceptButton onClick={() => {changeScreen("Game")}}>Sim</AcceptButton>
                <RejectButton onClick={() => {changeScreen("InitialMeunu")}}>Não</RejectButton>
            </Wrapper>
        </div>
    );
    
}

export default GameOver;