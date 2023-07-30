import { createGlobalStyle } from "styled-components";
import bgTexture from "../img/bg-texture.png"
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800&display=swap');


* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    border: none;
    line-height: 30px;
    outline: none;
    appearance: none;
    text-decoration:none;
    list-style: none;

}

:root {
    --color-bg: #1f1f38;
    --color-bg-variant:#2c2c6c;
    --color-primary: #4db5ff;
    --color-primary-variant: rgba(77, 181, 255, 0.4);
    --color-white: #fff;
    --color-ligth: rgb(255, 255, 255, 0.6);
    --transition: all 400ms ease;
}

body {
    background: var(--color-bg);
    color: var(--color-white);
    background-image: url(${bgTexture});
   
    
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        
    
  }

  &::-webkit-scrollbar-thumb {
    background-color:var(--color-primary) ;
    border-radius: 4px;
    /* Ajuste o tamanho da rolagem interna aqui */
    width: 6px; /* Largura da rolagem interna */
    height: 10px; /* Altura da rolagem interna */
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
  }
 
}


 
`;

export default GlobalStyle;
