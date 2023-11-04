/*
Responsável por renderizar interface do game
*/
import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import buzz from 'buzz';
import GameManager from '../utils/GameManager';

//components
import Dialog from './Dialog';
import AcceptButton from './AcceptButton'
import EmailMessage from './EmailMessage';
import RejectButton from './RejectButton';
import QuestionButton from './QuestionButton';

//context
import ScreenContext from '../contexts/ScreenContext';

//sounds
import susSound from '../assets/sounds/sus.mp3';
import errSound from '../assets/sounds/err.mp3';

const successeSound = new buzz.sound(susSound);
const failureSound = new buzz.sound(errSound);

//style
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 20px);
    min-height: 40px;
    padding-left: 10px;
    padding-right: 10px;

    color: ${(props) => props.theme.color};
    font-weight: bold;

    background-color: ${(props) => props.theme.background};

    span {
        font-size: 18px;
    }
    ${Wrapper}{
        flex-direction: row;
        gap: 10px;
    }
`;
const Footer = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;

    width: calc(100% - 20px);
    min-height: 55px;
    padding-inline: 10px;
    padding-top: 5px;

    color: ${(props) => props.theme.color};
    font-weight: bold;

    background-color: ${(props) => props.theme.background};
    
    button {
        padding: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 20px;
    }
    ${Wrapper} {
        flex-direction: column;

        span {
            font-size: 12px;
        }
    }
`;
const Main = styled.div`
    position: relative;
    overflow: hidden;

    display: flex;
    flex-grow: 1;
`;
const Game = styled(GameComponent)`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
`;

function restartAnimation(el){
    if(!el) return;
    //https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
    el.style.animation = 'none';
    el.getClientRects(); /* trigger reflow */
    el.style.animation = null; 
}

function GameComponent({className}){
    //contexts
    const { changeScreen } = useContext(ScreenContext);

    //refs
    const emailRef = useRef(null);
    const dialogRef = useRef(null);

    //states
    const [help, setHelp] = useState(GameManager.getMaxHelp);
    const [successes, setSuccesses] = useState(GameManager.getSuccesseCount());
    const [failures, setFailures] = useState(GameManager.getFailureCount());
    const [dialogueArray, setDialogueArray] = useState([...GameManager.getInitialDialogueArray()]);
    const [currentEmail, setCurentEmail] = useState(GameManager.getEmail());

    //effects
    useEffect(() => {
        if(dialogueArray.length == 0 && !currentEmail){
            GameManager.start();
        }
        if(dialogueArray.length === 0 && currentEmail !== GameManager.getEmail()){
            setCurentEmail(GameManager.getEmail());
            restartAnimation(emailRef.current);
        }

    }, [dialogueArray.length, GameManager.getEmail()]);
    
    //config events from GameManeger
    GameManager.onSucess = () => {
        successeSound.stop().play();
        setSuccesses(GameManager.getSuccesseCount());
    };
    GameManager.onFailure = () => {
        failureSound.stop().play();
        
        setFailures(GameManager.getFailureCount());
        setDialogueArray([...currentEmail.missDialogueArray]);
    };
    GameManager.onGameOver = () => {

        changeScreen('GameOver');
    };
    GameManager.onGameWin = () => {
        changeScreen("GameWin")
    };

    //events
    const useHelp = () =>{
        dialogueArray.push(GameManager.getHelpDialogue());
        setDialogueArray([...dialogueArray]);
        setHelp(GameManager.getHelpCount());
    };
    const reject = ()=> {
        GameManager.checkEmail(false);
        GameManager.nextEmail();
    };
    const accept = ()=> {
        GameManager.checkEmail(true);
        GameManager.nextEmail();
    };
    const nextDialogue = () => {
        dialogueArray.shift();
        setDialogueArray([...dialogueArray]);
    };

    //factories
    function createDialogComponent(data){
        return data &&(
            <Dialog title={data.title} onClose={nextDialogue} compRef={dialogRef}>
                {data.content}
            </Dialog>
        );
    }

    return(
        <div className={className}>
            <Header>
                <Wrapper>
                    <span>Acertos: {successes}/{GameManager.getMaxSuccesse()}</span>
                    <span>Erros: {failures}/{GameManager.getMaxFailure()}</span>
                    <span>Dicas: {help}/{GameManager.getMaxHelp()}</span>
                </Wrapper>

                {/*<span>Desafio 1/5</span>*/}
            </Header>

            <Main>
                {currentEmail &&<EmailMessage 
                subject={currentEmail.subject}
                senderName={currentEmail.senderName}
                senderEmail={currentEmail.senderEmail}
                receiverEmail={currentEmail.receiverEmail}
                date={currentEmail.date}
                contentPath={currentEmail.contentPath}
                isResponsive={currentEmail.isResponsive}
                children={currentEmail.content}
                compRef={emailRef}/>}
            </Main>
            <Footer>
                <RejectButton onClick={reject}>X</RejectButton>

                <QuestionButton onClick={useHelp} disabled={help <= 0}>?</QuestionButton>

                <AcceptButton onClick={accept}>✔</AcceptButton>
            </Footer>
            {createDialogComponent(dialogueArray[0])}
        </div>
    );
}

export default Game;