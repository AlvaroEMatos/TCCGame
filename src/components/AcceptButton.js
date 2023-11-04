import styled from 'styled-components';

const AcceptButton = styled(acceptButtonComponent)`
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
    border: 0;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.551);
    background-color: ${(props) => props.theme.acceptButton.background};
    color: ${(props) => props.theme.acceptButton.color};

    &:enabled:active {
        filter: brightness(1.1);
    }
    &:disabled {
        opacity: 0.7;
    }
` 

function acceptButtonComponent(props){
    return (
        <button {...props}></button>
    );
}

export default AcceptButton;