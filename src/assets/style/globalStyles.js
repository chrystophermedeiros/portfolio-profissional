import { createGlobalStyle } from 'styled-components';

import bgTexture from '../img/bg-texture.png';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    border: none;
    line-height: 30px;
    outline: none;
    appearance: none;
    text-decoration: none;
    list-style: none;
}

:root {
    --color-bg: #545456; 
    --color-bg-variant: #333333; 
    --color-primary: #4db5ff; 
    --color-primary-variant: rgba(77, 181, 255, 0.4); 
    --color-white: #f0f0f0; 
    --color-black: #000000; 
    --color-accent: #f6b93b;
    --transition: all 400ms ease; 
}


[data-theme='dark'] {
    --color-bg: #1a1a1a; 
    --color-bg-variant: #333333; 
    --color-primary: #429ad9; 
    --color-primary-variant: rgba(77, 181, 255, 0.4); 
    --color-white: #f0f0f0; 
    --color-black: #ffffff; 
    --color-accent: #ffb84d
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
        background-color: var(--color-primary);
        border-radius: 4px;
        width: 6px; 
        height: 10px; 
    }

    &::-webkit-scrollbar-track {
        background-color: #dcdcdc; 
        border-radius: 4px;
    }
}
`;

export default GlobalStyle;
