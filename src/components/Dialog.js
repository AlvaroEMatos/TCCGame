import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import AcceptButton from './AcceptButton';

const BackPane = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
`
const DialogComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-width: 330px;
    max-width: 80%;
    min-height: 187px;
    max-height: 50%;
    padding: 15px;
    border: none;
    border-radius: 12px;

    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
    background-color: white;

    animation: 0.5s grow1;

    h2 {
        text-align: center;
        font-size: 20px;
    }
    p {
        text-align: center;
        font-size: 18px;
    }

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
function Dialog({title, children, onClose = () =>{}, compRef}) {
    const [isVisible, setVisibility] = useState(true);

    const close = () => {
        //setVisibility(false);
        onClose();
    }

    return isVisible && (
        <BackPane>
            <DialogComponent ref={compRef}>
                <Wrapper>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </Wrapper>

                <AcceptButton onClick={close}>Continuar</AcceptButton>
            </DialogComponent>
        </BackPane>
    );
    
}

export default Dialog;