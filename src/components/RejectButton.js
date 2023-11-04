import styled from 'styled-components';

const RejectButton = styled(RejectButtonComponent)`
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
    border: 0;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.551);
    background-color: ${(props) => props.theme.rejectButton.background};
    color: ${(props) => props.theme.rejectButton.color};

    &:enabled:active {
        filter: brightness(1.1);
    }
    &:disabled {
        opacity: 0.7;
    }
` 

function RejectButtonComponent(props){
    return (
        <button {...props}></button>
    );
}

export default RejectButton;