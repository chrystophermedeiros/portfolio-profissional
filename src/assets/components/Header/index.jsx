import { Container,ContainerItems } from "./style";
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
    const [changeBackground, setChangebackgroud] = useState(false)


    window.onscroll = () => {
        if (window.pageYOffset > 150) {
          setChangebackgroud(true)
        } else {
          setChangebackgroud(false)
        }
      }

    return (
        <Container changeBackground={changeBackground} >
            <ContainerItems>
                <ul>
                    <li>CMS</li>
                    <li><a href="/">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li>Tecnologias</li>
                    <li ><a href="#portfolio">Portfolio</a></li>
                    <li>Contato</li>
                    <li>dark</li>
                </ul>
            </ContainerItems>

        </Container>
    ) 
}