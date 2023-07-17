import { v1 as uuidv1 } from 'uuid';
import imgAndroid from '../img/projects/projeto-android.jpg'
import imgCordel from '../img/projects/projeto-cordel.png'
import imgMovies from '../img/projects/projeto-movies.png'
import imgPortfolioWebsite from '../img/projects/projeto-portfolio-website.jpg'
import imgAnimate from '../img/projects/projeto-animate-sprite.png'
import imgTarefas from '../img/projects/projeto-tarefas.png'


export const projects = [
    {
        id: uuidv1(), 
        img:imgAndroid,
        name: "Curiosidades Tecnologicas",
        about: "Curiosidades de Tecnologia é um site que reúne informações interessantes sobre o mundo Tech, com foco no sistema operacional Android. Nele, você encontrará notícias, artigos e curiosidades sobre o icônico mascote do Android, desde sua origem até sua evolução para o Bugdroid. Além disso, o site compartilha curiosidades sobre as versões do Android, que são nomeadas em ordem alfabética em homenagem a doces. O site foi criado por Chrystopher Medeiros para o CursoemVideo e é um ótimo lugar para aprender mais sobre o sistema Android e suas curiosidades.",
        path: "https://chrystophermedeiros.github.io/projeto-android/",
        github: "https://github.com/chrystophermedeiros/projeto-android"

 
    
    },

    {
        id: uuidv1(),
        img:imgCordel, 
        name: "Cordel Moderno",
        about: "Um belo cordel moderno de autoria de Milton Duarte! O texto retrata de forma poética a frustração e saudade que alguns sentem em relação à comunicação atual dominada pela tecnologia. .",
        path: "https://chrystophermedeiros.github.io/projeto-cordel/",
        github: "https://github.com/chrystophermedeiros/projeto-cordel"

 
    
    },

    {
        id: uuidv1(),
        img:imgMovies, 
        name: "Movies",
        about: `Projeto voltado a catalago de filmes e series populares com consumo de api do site: ${<a target='_blank' href="https://www.themoviedb.org/">Link</a>} `,
        path: "https://devmoviespopulares.netlify.app/",
        github: "https://github.com/chrystophermedeiros/movies"

 
    
    },


    {
        id: uuidv1(),
        img:imgTarefas, 
        name: "Lista de Tarefas",
        about: "Aqui você pode adcionar suas tarefas enquanto faz o que gosta de melhor",
        path: "https://devlistadetarefas.netlify.app/",
        github: "https://github.com/chrystophermedeiros/tarefa-react-vite"

 
    
    },

    {
        id: uuidv1(),
        img:imgPortfolioWebsite, 
        name: "Portfolio Website",
        about: "Desenvolvido com as tecnologias typeScript, HTML, CSS, JavaScript, React. Meu portfólio inclui projetos como movies, projeto-android, projeto-cordel, animate-sprite e dashboard.",
        path: "https://portfolio-cms99.netlify.app/",
        github: "https://github.com/chrystophermedeiros/portfolio_website"

 
    
    },

    {
        id: uuidv1(),
        img:imgAnimate, 
        name: "Animate Sprite",
        about: "Feito em loop com uma imagem, no qual o personagem contem varias forma de andar.",
        path: "https://chrystophermedeiros.github.io/animate-sprite/",
        github: "https://github.com/chrystophermedeiros/animate-sprite"

 
    
    },

]