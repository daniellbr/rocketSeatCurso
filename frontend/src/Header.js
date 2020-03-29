import React from 'react' ;

export default function Header({children}) { // A função receberá a propriedade automática
                                   // children ela foi desestruturada o objeto desta
    return (                       // propriedade é props.children
        <header>                   
            <h1>{children}</h1>   
        </header>                  //colocar o export ao final desta maneira
    );                             // apos o fechamento do bigodinho
                                   // colocaria "export default Header"     
  }
                                   //Agora para aplicar o conceito de propriedades
                                   //Vamos supor que esse header tenha diferentes 
                                   //textos uma para cada pagina. 
                                   //Podemos aplicar a proprioedade title=  
//export React Header; Esta comentado pois está exportando no inicio da função
//No inicio a exportação da função já está implicita 

     