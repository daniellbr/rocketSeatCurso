import React from 'react';
import Header from './Header';

function App() {
  return (
   <Header> 
     Semana OmniStack!
   </Header> // Como o header não tem nenhum conteudo 
              //ela pode ser fechada nela mesma. 
              //Agora para aplicar o conceito de propriedades
              //passaremos a propriedade title="Semana OmniStack"
              //Desta maneira o Header poderá ser utilizado em varias outras paginas
  );
}

export default App;
