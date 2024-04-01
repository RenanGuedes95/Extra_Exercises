//Selecionando os elementos do html.
let text = document.querySelector('.message > span');
let author = document.querySelector('.author > span');
let nextButton = document.querySelector('#btn-1');
let index = 0;


let listOfMessage = [
`"Nas nossas vidas diárias, devemos ver que não é a felicidade que nos faz agradecidos, mas a gratidão é que nos faz felizes."`,
`"O futuro é construído pelas nossas decisões diárias, inconstantes e mutáveis, e cada evento influencia todos os outros."`,
`"As pessoas seguem a correnteza, obedecendo às suas rotinas diárias e antecipadamente resignadas diante da impossibilidade de mudá-la, e acima de tudo convencidas da irrelevância e ineficácia de suas ações ou de sua recusa em agir."`,
`"A vida não é feita só de lembranças. Ela continua emocionante nas promessas diárias, nos pequenos gestos que fazem a alegria dos que caminham sempre juntos."`,
`"A preservação do meio ambiente começa com pequenas atitudes diárias, que fazem toda a diferença. Uma das mais importantes é a reciclagem do lixo."`
];

let listOfAuthors = [
    "Albert Clarke",
    "Alvin Tofller",
    "Zygmunt Bauman",
    "Desconhecido",
    "Natália alves.. Nathy"
];

nextButton.addEventListener("click", event =>{
    if(index < listOfMessage.length){
    text.innerText = listOfMessage[index];
    author.innerText = listOfAuthors[index];
    index++;
    }else{
        index = 0;
    }
});