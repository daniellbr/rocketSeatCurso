import React from 'react'; // Importando o React
import ReactDOM from 'react-dom'; // Importando o React-Dom que é a arvore de elementos
import App from './App'; // Importando App que é o arquivo App.js

//Um componente no react é uma função que retorna HTML
//Ela pode ter funcionalidade JS CSS
//Porem quando este HTML está escrito dentro do JS
//Ele por definicção é chamado de JSX (JavaScript XML)


ReactDOM.render(<App />, document.getElementById('root')); //* Esta linha de codigo quer dizer: 
                                                           // Ele está utilizando o ReactDOM.render 
                                                           //a variavel render é para REENDERIZAR na 
                                                           //pagina em outras palavras é colocando em
                                                           //Tela. Quanto o DOM está disponivel quer 
                                                           //dizer que o HTML já está montado
                                                           //Ele está colocando o App na tela
                                                           //No REACT a variavel pode ser escrita igual
                                                           //uma TAG HTML e a primeira letra é MAIUSCULA
                                                           //E finalmente ele está colocando a variavel
                                                           //App React dentro da div com o ID=root. E o que
                                                           // tem dentro do App até o momento um 
                                                           //<H1>Olá</H1>. Por isso
                                                           // ele está dando um comando
                                                           //document.getElementById('root'). Se no HTML 
                                                           //estivesse escrito id=abobrinha ele iria colocar 
                                                           //abobrinha no getElement.
                                                             
