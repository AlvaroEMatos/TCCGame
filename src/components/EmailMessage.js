/*
Responsável por imitar a interface do app gmail quando um emal está aberto
*/
import React, {useState} from 'react';
import styled from 'styled-components';
import IconBase from './Icon';
import NameIconBase from './NameIcon'
//icones
import expandMoreIcon from '../assets/expand_more.svg';
import expandLessIcon from '../assets/expand_less.svg';

const NameIcon = styled(NameIconBase)`
    width: 50px;
    min-width: 50px;
    height: 50px;
    font-size: 26px;
`
const Icon = styled(IconBase)`
    background-color: gray;
`
const ExpandButton = styled.button`
    width: 20px;
    height: 20px;
`
const Wrapper = styled.div`
    display: flex;
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    ${Wrapper}{
        flex-direction: column;
        gap: 0px;
        min-width: 0px;

        ${Wrapper} {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
    }
    h2{
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
` 
const MoreInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    margin-top: 16px;
    padding: 10px;
    max-width: fit-content;
    min-width: 0px;
    div{
        flex-direction: column;
        gap: 2px;
    }
    div:nth-child(2) {
        max-width: fit-content;
        word-wrap: break-word;
        min-width: 0px;
    }
    span{
        overflow: hidden;
    }
`
const Header = styled.div`

`
const Content = styled.div`
    margin-block: 20px;
    flex-grow: 1;

    border: 1px solid gray;

    white-space:pre-wrap;
    text-align: justify;

    overflow: scroll;
    iframe{
        overflow: hidden;
        border: 0;
    }
`
const EmailMessage = styled(EmailMessageComponent)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    min-width: 0px;
    padding-left: 12px;
    padding-right: 18px;

    animation: 0.5s fade;
    button{
        padding: 0;
        border-radius: 50%;
        border: 0;
    }
    button:active{
        background-color: rgb(200, 200, 200);
    }
`

function EmailMessageComponent({className, subject, senderName, senderEmail, receiverName, receiverEmail, date, secure = true, contentPath, children, isResponsive, compRef}) {
    const [moreOptions, setMoreOptionsVisibility] = useState(false);
    
    const preventClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    return(
        <div className={className} ref={compRef}>
            <Header>
                <h1>{subject}</h1>

                <Info>
                    <NameIcon className="name-icon" name={senderName} seed={senderEmail}/>

                    <Wrapper>

                        <Wrapper>
                            <h2>{senderName}</h2> <span>{date}</span>
                        </Wrapper>

                        <Wrapper>
                            <span>para mim</span>
                            <ExpandButton
                            onClick={() => {
                                setMoreOptionsVisibility(!moreOptions);
                            }}
                            >
                                <Icon src={(moreOptions)? expandLessIcon : expandMoreIcon}/>
                            </ExpandButton>
                        </Wrapper>
                    </Wrapper>
                </Info>

                {moreOptions && <MoreInfo>
                    <Wrapper>
                        <span>de:</span>
                        <span>para:</span>
                        <span>data:</span>
                        <span style={(!secure)? {color: 'red'} : undefined}>segurança:</span>
                    </Wrapper>
                    <Wrapper>
                        <span>{senderEmail}</span>
                        <span>{receiverEmail}</span>
                        <span>{date}</span>
                        <span style={(!secure)? {color: 'red'} : undefined}>{(secure)? 'criptografia padrão': 'sem criptografia'}</span>
                    </Wrapper>
                </MoreInfo>}
            </Header>

            <Content>
                {(children)? children :
                    <iframe
                    style={(isResponsive)? {width: '100%'} : {}}
                    src={contentPath}
                    onLoad={(e) => {
                        const iframe = e.target;
                        iframe.contentWindow.document.body.addEventListener('click', preventClick)
                        iframe.height = iframe.contentWindow.document.body.scrollHeight;
                        iframe.width = iframe.contentWindow.document.body.scrollWidth;
                    }}
                    scrolling="no"
                    />
                }
            </Content>
        </div>
    )
}

export default EmailMessage;