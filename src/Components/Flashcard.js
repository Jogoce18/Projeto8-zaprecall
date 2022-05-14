import React from 'react'
import {useState}  from "react";
import FlashCard from './FlashcardList';
import Footer from "./Footer";
import Header from "./Header";

const decks = {
    geral:[
        {
            question: "Componentes devem iniciar com __ ",
            answer: "letra maiúscula",
        },
        {
            question: "O que é DOCTYPE no HTML",
            answer: "Se relaciona com a versão do HTML que queremos usar. DOCTYPE se refere a versão mais atual.",
        },
        {
            question: "A tag head é especial pois __",
            answer: "Possui especial de adicionar metadata e recursos de estilo ao html",
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando",
        },
        {
            question: "BackEnd é __",
            answer: "A parte do site que fica fora da iteração direta do usuária e é acessada via requisições",
        },
        {
            question: "o que significa a sigla IP?",
            answer: "Internet Protocol",
        },
        {
            question: "O que significa HTML?",
            answer: "significa Hyper Text Markup Language",
        },
    ],
    html: [
        {
            question: "O que é HTML?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            question: "O React é __ ",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        {
            question: "Podemos colocar __ dentro do HTML",
            answer: "expressões"
        },
        {
            question: "O ReactDOM nos ajuda __ ",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes"
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ],
    css: [
        {
            question: "Como você sublinha o texto?",
            answer: "text-decoration: underline;"
        },
        {
            question: "Na hierarquia das regras CSS, qual é a sempre usada?",
            answer: "a mais específica"
        },
        {
            question: "Qual a função do Reset CSS?",
            answer: "É um arquivo que “limpa” os estilos padrões de todos os elementos HTML que já possuem uma formatação padrão"
        },
        {
            question: "Qual a extensão dos arquivos CSS?",
            answer: ".CSS"
        },
        {
            question: "Como podemos se conectar a um arquivo de estilos externo?",
            answer: "Usando a tag <link></link>"
        },
        {
            question: "Como fazer uma linha horizontal acima do elemento selecionado?",
            answer: "border: bottom: 1 px solid black;"
        },
        {
            question: "O que faz o valor border-box para box-sizing?",
            answer: "O box-sizing com o valor border-box faz com que o navegador não calcule a dimensão de um elemento somando bordas e margens com altura e largura."
        },
        {
            question: "Qual a sintaxe da pseudo-classe que seleciona o n-ésimo elemento em um grupo de elementos?",
            answer: "elemento:nth-child()"
        }
    ] ,
    react: [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScrip",
        },
        {
            question: "O React é __ ",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        {
            question: "O ReactDOM nos ajuda __ ",
            answer: "Interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando",
        },
        {
            question: "Componentes devem iniciar com __ ",
            answer: "letra maiúscula",
        },
    ],
}
    



const flashcards= [
    {
        questionNumber: 1,
        question: "",
        answer: ""
    },
    {
        questionNumber: 2,
        question: "",
        answer: ""
    },
    {
        questionNumber: 3,
        question: "",
        answer: ""
    },
    {
        questionNumber: 4,
        question: "",
        answer: ""
    },
    {
        questionNumber: 5,
        question: "",
        answer: ""
    },
    {
        questionNumber: 6,
        question: "",
        answer: ""
    },
    {
        questionNumber: 7,
        question: "",
        answer: ""
    },
    {
        questionNumber: 8,
        question: "",
        answer: ""
    }
]

export default function SectionQuestions({selectedDeck}) {
    
    function comparador() { 
        return Math.random() - 0.5; 
    }
    
    let questionsDecksShuffled = {...decks};
   
   console.log(selectedDeck)
   if (selectedDeck==="geral") {
        questionsDecksShuffled.geral.sort(comparador);
        questionsDecksShuffled.geral.forEach((question, index) => {
        flashcards[index].question = question.question;
        flashcards[index].answer = question.answer;

        })
    }
    if (selectedDeck === "html") {
        questionsDecksShuffled.html.sort(comparador);
        questionsDecksShuffled.html.forEach((question, index) => {
            flashcards[index].question = question.question;
            flashcards[index].answer = question.answer;
            
    
        })
   }
    if (selectedDeck=== "css") {
        questionsDecksShuffled.css.sort(comparador);
        questionsDecksShuffled.css.forEach((question, index) => {
        flashcards[index].question = question.question;
        flashcards[index].answer = question.answer;
    
        })
    }
    if (selectedDeck=== "react") {
        questionsDecksShuffled.react.sort(comparador);
        questionsDecksShuffled.react.forEach((question, index) => {
        flashcards[index].question = question.question;
        flashcards[index].answer = question.answer;
    
        })
    }
    const [contador, setContador] = useState(0);
    const [iconsAnswers, setIconsAnswers] = useState([])
    

    
    return (
        <>
        <div>
        <Header/>,
        <div className="flash-cards">
                {flashcards.map((flashcard,index) => (
                    <FlashCard key={index} contador = {contador} setContador={setContador} iconsAnswers = {iconsAnswers} 
                    setIconsAnswers = {setIconsAnswers}  questionNumber= {flashcard.questionNumber} question={flashcard.question} answer={flashcard.answer}/>
                ))}
            </div>
          
        </div>  
        <div className="espacio"></div>
        <Footer  contador = {contador} setContador={setContador} iconsAnswers = {iconsAnswers} setIconsAnswers={setIconsAnswers} 
         selectedDeck={selectedDeck}  />
         
        </>       
    
    );
}

