/*
Responsável por renderizar icones procedurais coloridos semelhantes aos do google/outlook
*/
import styled from 'styled-components';
import seedrandom from 'seedrandom'; 

const NameIcon = styled(NameIconComponent)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    background: hwb(${(props) => seedrandom (props.seed)() * 360} 25% 0%);
    div{
        padding-top: 0.1em;
        font-size: 1em;
    }
`

//    background-color: hwb(${(props) => {}}, 25%, 0%);
function NameIconComponent({className, name, seed}){
    return(
        <div className={className}>
            <div>{name[0]}</div>           
        </div>
    );
}

export default NameIcon;