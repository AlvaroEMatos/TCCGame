import styled from 'styled-components';

const QuestionButton = styled(QuestionButtonComponent)`
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
    border: 0;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.551);
    background-color: ${(props) => props.theme.questionButton.background};
    color: ${(props) => props.theme.questionButton.color};

    &:enabled:active {
        filter: brightness(1.1);
    }
    &:disabled {
        opacity: 0.5;
    }
` 

function QuestionButtonComponent(props){
    return (
        <button {...props}></button>
    );
}

export default QuestionButton;