export const trueEmails = [
    {
        //idx=0
        subject: "A quanto tempo Velho amigo!",
        senderName: "Marcelo Barbosa",
        senderEmail: "marcelobarbosaa@yahoo.com",
        receiverName: "Rafael Costa",
        receiverEmail: "rafael678@gmail.com",
        date: "23 de out. de 2023",
        contentPath:'',
        content:
        "Tudo Bem Marcelo," 
        + "\n\nEspero que esta mensagem o encontre com saúde e felicidade. Incrível como o tempo voa, não é? Faz um bom tempo desde a última vez que nos encontramos pessoalmente. Lembro-me com carinho dos dias em que costumávamos passar horas conversando e rindo juntos."
        + "\n\nA vida tem sido uma montanha-russa por aqui. Muitas mudanças e desafios, mas também muitas conquistas e momentos gratificantes. E você, como tem passado? O que tem feito desde que nos separamos? Aposto que você tem algumas histórias incríveis para compartilhar."
        +"\n\nA vida tem sido uma montanha-russa por aqui. Muitas mudanças e desafios, mas também muitas conquistas e momentos gratificantes. E você, como tem passado? O que tem feito desde que nos separamos? Aposto que você tem algumas histórias incríveis para compartilhar."
        +"\n\nPor favor, me mantenha atualizado e não demore a me responder. Sua amizade significa muito para mim, e gostaria de reconectar e fortalecer nossa amizade mais uma vez."
        +"\n\n\nCom os melhores cumprimentos e lembranças afetuosas,"
        +"\n\nRafael.\n\n\n",
        isResponsive: false,
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. E-amils que possuem apenas texto não oferecem risco nenhum."),
        ],
    },
    {
        //idx=1
        subject: "Colisão no Estacionamento",
        senderName: "Priscila Lima",
        senderEmail: "priscila1000@live.com",
        receiverName: "Marcelo Barbosa",
        receiverEmail: "marcelobarbosaa@yahoo.com",
        date: "20 de out. de 2023",
        contentPath:'',
        isResponsive: false,
        content:
        "Prezado Marcelo,"
        +"\n\nEspero que esta mensagem o encontre bem. Quero expressar meu profundo pesar pelo incidente que aconteceu recentemente no estacionamento. Infelizmente, acabei batendo no seu carro enquanto manobrava o meu veículo. Fiquei extremamente chateado(a) com o ocorrido e sinto muito pela inconveniência que isso possa ter lhe causado."
        +"\n\nGostaria de assegurar-lhe que assumirei total responsabilidade pelos danos causados. Estou disposto(a) a arcar com todas as despesas de reparo necessárias para restaurar o seu veículo à sua condição original. Por favor, me informe sobre o procedimento que você considera mais adequado para resolver essa situação de maneira justa e rápida."
        +"\n\nAlém disso, se for conveniente para você, estou disposto(a) a discutir pessoalmente os detalhes e garantir que você fique completamente satisfeito(a) com a solução proposta. Valorizo a importância de assumir a responsabilidade por minhas ações e estou comprometido(a) em resolver esse problema da melhor forma possível."
        +"\n\nMais uma vez, peço desculpas pelo transtorno causado e agradeço antecipadamente pela sua compreensão. Fico no aguardo de suas orientações sobre como proceder."
        +"\n\nAtenciosamente,"
        +"\n\nPriscila"
        +"\ncel.: (11) 99999-9999\n\n\n",

        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. E-amils que possuem apenas texto não oferecem risco nenhum."),
        ],
    },
    {
        //idx=2
        subject: "Você tem 11 notificações sobre Maria e outras pessoas",
        senderName: "Facebook",
        senderEmail: "notification@priority.facebookmail.com",
        receiverName: "Marcos Oliveira",
        receiverEmail: "marcosgm@gmail.com",
        date: "25 de out. de 2023",
        isResponsive: true,
        contentPath: "./html/facebook.html",
        content:'',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. O Faceboock utiliza o domínio 'facebookmail.com' para enviar notificações aos usuários. Experimente colocar 'facebookmail.com' na barra de enderoço do seu navegador."),
        ],
    },
    {
        //idx=3
        subject: "Está precisando se divertir um pouco?",
        senderName: "Banco do Brasil",
        senderEmail:"comunicado@clientesbb.com.br",
        receiverName: "Augusto Souza Martins",
        receiverEmail: "augustosouzamart@outlook.com",
        date: "03 de nov. de 2023",
        isResponsive: false,
        contentPath: './html/bb.html',
        content: '',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. O Banco do Brasil utiliza o domínio 'clientesbb.com.br' para enviar publicidade aos usuários. Experimente pesquisar 'clientesbb.com.br email é seguro?' no Google."),
        ],
    },
    {
        //idx=4
        subject: "Aêêê! 🎉 Feliz aniversário Ana",
        senderName: "Reclame Aqui",
        senderEmail:"reclameaqui@mkt.reclameaqui.com.br",
        receiverName: "Ana Beatriz Lima",
        receiverEmail: "anabeariz13@gmail.com",
        date: "04 de nov. de 2023",
        isResponsive: false,
        contentPath: './html/reclameaqui.html',
        content: '',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. O Reclame Aqui utiliza o domínio 'reclameaqui.com.br'. Experimente colocar 'reclameaqui.com.br' na barra de enderoço do seu navegador."),
        ],
    },
    {
        //idx=5
        subject: "A fatura do seu cartão Nubank está fechada",
        senderName: "Nubak",
        senderEmail:"todomundo@nubank.com.br",
        receiverName: "Lívia Silva",
        receiverEmail: "liviasilva444@gmail.com",
        date: "01 de nov. de 2023",
        isResponsive: true,
        contentPath: './html/nubank.html',
        content: '',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. O Nubank utiliza o domínio 'nubank.com.br' para enviar faturas de cartão de crédito. Experimente colocar 'nubank.com.br' na barra de enderoço do seu navegador."),
        ],
    },
    {
        //idx=6
        subject: "Alguém lhe enviou secretamente uma mensagem",
        senderName: "Kwai",
        senderEmail:"Kwai@scnotify.kwai.com",
        receiverName: "Yuri Nomura",
        receiverEmail: "yurinumu@live.com",
        date: "01 de nov. de 2023",
        isResponsive: true,
        contentPath: './html/kwai.html',
        content: '',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. O Kwai utiliza o domínio 'cnotify.kwai.com' para enviar notificações aos seus usuários. Experimente colocar 'kwai.com' na barra de enderoço do seu navegador."),
        ],
    },
    {
        //idx=7
        subject: "🚨 Você pode mudar o mercado imobiliário!",
        senderName: "Viva Real",
        senderEmail:"news@novidades.vivareal.com.br",
        receiverName: "Élcio Augusto Andrade",
        receiverEmail: "elcio000@hotmail.com",
        date: "01 de nov. de 2023",
        isResponsive: false,
        contentPath: './html/imobiliaria.html',
        content: '',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. A imobiliária Viva Real utiliza o domínio 'novidades.vivareal.com.br' para enviar publicidade. Experimente colocar 'vivareal.com.br' na barra de enderoço do seu navegador."),
        ],
    },
    {
        //idx=8
        subject: "Aviso de alteração de dados da conta de acesso gov.br",
        senderName: "Gov.br",
        senderEmail:"naoresponda-contasgovbr@economia.gov.br",
        receiverName: "Rosanna Mello",
        receiverEmail: "rosamel@gmail.com",
        date: "05 de nov. de 2023",
        isResponsive: false,
        contentPath: './html/gov.html',
        content: '',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail era legítimo. A plataforma do governo Gov.br utiliza o domínio 'economia.gov.br' para comunicar-se com seus usuários. Experimente pesquisar 'economia.gov.br email é seguro?' no Google."),
        ],
    },          
]

export const fakeEmails = [
    {
        ...trueEmails[2],
        senderEmail: "facebook@hotmail.com",
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. O Faceboock utiliza o domínio 'facebookmail.com' e não 'hotmail.com' para enviar notificações aos usuários. Empresas sérias sempre vão utilizar seus próprios domínios e não de terceiros como 'hotmail.com', 'gmail.com', 'outlook.com', etc..."),
        ],
    },
    {
        ...trueEmails[3],
        senderEmail: 'bancodobrasil@bacobrasil.com',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. O Banco do Brasil utiliza o domínio 'clientesbb.com.br' e não 'bacobrasil.com' para enviar publicidade aos usuários. Golpistas podem tentar te direcionar à páginas falsas e roubar suas informações pessoais, como senhas de banco. Portanto tenha cuidado ao clicar em links"),
        ],
    },
    {
        ...trueEmails[3],
        senderEmail: 'bacobrasil@gmail.com',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. O Banco do Brasil utiliza o domínio 'clientesbb.com.br' e não 'bacobrasil.com' para enviar publicidade aos usuários. Empresas sérias sempre vão utilizar seus próprios domínios e não de terceiros como 'hotmail.com', 'gmail.com', 'outlook.com', etc..."),
        ],
    },
    {
        ...trueEmails[5],
        senderEmail: 'todomundo@nuconta.com',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. O Nubank utiliza o domínio 'nubank.com.br' e não 'nuconta.com' para enviar faturas de cartão de crédito. O Banco do Brasil utiliza o domínio 'clientesbb.com.br' e não 'bacobrasil.com' para enviar publicidade aos usuários. Golpistas podem te enviar boletos falsos para roubar seu dinheiro. Portanto pague suas cotas atravez de aplicativo e não através de boletos em anexo"),
        ],
    },
    {
        ...trueEmails[5],
        senderEmail: 'nubank@protonmail.com',
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. O Nubank utiliza o domínio 'nubank.com.br' e não 'protonmail.com' para enviar faturas de cartão de crédito. Empresas sérias sempre vão utilizar seus próprios domínios e não de terceiros como 'hotmail.com', 'gmail.com', 'outlook.com', etc..."),
        ],
    },
    {
        ...trueEmails[6],
        senderEmail:"advisorkwai@outlook.com",
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. O Kwai utiliza o domínio 'scnotify.kwai.com' e não 'outlook.com' para enviar faturas de cartão de crédito. Empresas sérias sempre vão utilizar seus próprios domínios e não de terceiros como 'hotmail.com', 'gmail.com', 'outlook.com', etc..."),
        ],
    },
    {
        ...trueEmails[8],
        senderEmail:"naoresponda-contasgovbr@economia.gov.com",
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. A plataforma Gov.br utiliza o domínio 'economia.gov.br' e não 'economia.gov.com' para enviar notificações aos seus usuários. Golpistas podem tentar te direcionar à páginas falsas e roubar suas informações pessoais, como senhas de login. Portanto tenha cuidado ao clicar em links"),
        ],
    },
    {
        ...trueEmails[8],
        senderEmail:"naoresponda@economia.gov.com",
        missDialogueArray: [
            createDialogData("Você errou!","Esse e-mail é falso. A plataforma Gov.br utiliza o domínio 'economia.gov.br' e não 'economia.gov.com' para enviar notificações aos seus usuários. Golpistas podem tentar te direcionar à páginas falsas e roubar suas informações pessoais. Sites sérios nunca vão te pedir para fornecer algum tipo de código através de um link"),
        ],
    },
]

function  createDialogData(title, content) {
    return {title: title, content: content}
}