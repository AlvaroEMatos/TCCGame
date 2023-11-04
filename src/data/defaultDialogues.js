//dialogos padrões
export const initialDialogueArray = [
    createDialogData("Bem Vindo Jogador!", "Esse é um jogo educativo que vai te ensinar a se proteger de golpes pela internet."),
    createDialogData("Como Jogar", "Para Jogar é bem simples. Seu objetivo é classificar corretamente quais e-mails são legítimos e quais são maliciosos."),
    createDialogData("Como Jogar", "Investigue todas as informações, título, contúdo, remetente, etc..."),
    createDialogData("Como Jogar", "Quando tiver certeza clique no botão vermelho para classificar como malicioso ou verde para classificar como legítimo."),
    createDialogData("Como Jogar", "Se estiver com dúvida clique no botão amarelo para receber uma dica! Não se esqueça, elas são limitadas."),
];
export const objectiveDialogueArray = [
    createDialogData("Objetivo", "Classifique 10 e-mails corretamente para vencer!"),
];
export const helpsDialogueArray = [
    createDialogData("Ajuda", "O endereço do remetente é revelado ao clicar no icone de 'flecha' ao lado da indicação 'para mim'."),
    createDialogData("Ajuda", "Existem dois elementos distintos que podem ser identificados nos endereços de e-mail. O primeiro é o nome, localizado antes do '@', identifica quem foi o responsável por mandar a mensagem. O segundo é o domínio, localizado depois do '@', determina por qual site foi enviado o e-mail."),
    createDialogData("Ajuda", "Empresas sérias nunca vão utilizar domínios (nomes dos sites na internet) de terceiros para enviar e-mails, como por exemplo 'gmail.com', 'outlook.com', 'hotmail.com', etc. Por isso emais como por exemplo 'caixa@gmail.com' é com certeza um golpe."),
    createDialogData("Ajuda", "Empresas sérias nunca vão utilizar domínios (nomes dos sites na internet) de terceiros para enviar e-mails, como por exemplo 'gmail.com', 'outlook.com', 'hotmail.com', etc. Por isso emais como por exemplo 'caixa@gmail.com' é com certeza um golpe."),
    createDialogData("Ajuda", "Nunca baixe arquivos '.exe' de anexos de e-mail"),
    createDialogData("Ajuda", "Cuidado ao clicar em links em e-mails. Links falso podem te levar para paginas identicas as legítimas e roubar seus dados de login e senha."),
    createDialogData("Ajuda", "Empresas sérias nunca vão te pedir para enviar um código de verificação sem antes você ter solicitado;"),
]
export const helpFilureDialogue = createDialogData("As ajudas acabaram!", "Infelizmente você já utilizaou todas as ajudas.");
export const gameOverDialogue = createDialogData("Você perdeu!","Não se desanime, como diz o ditado \"é errando que se aprende\".");
export const victoryDialogue = createDialogData("Parabéns você venceu!", "Por enquanto não temos mais conteúdo para explorar");


function  createDialogData(title, content) {
    return {title: title, content: content}
}