import { Container, ContainerItems, MyImg, Card, ContainerButton } from "./style"
import I from '../../img/eu.svg'
import { Button } from "../Button"
import { FiGithub, FiLinkedin } from 'react-icons/fi'



export function Main() {
    return (
        <Container  >
            <ContainerItems>
                <Card>
                    <h1>Seja bem vindo, </h1>
                    <h2> Chrystopher Medeiros</h2>
                    <h3>Desenvolvedor Front - End</h3>
                    <ContainerButton>
                        <a target="_blank" href="https://www.linkedin.com/in/chrystopher-medeiros"><Button className="button" btn1><FiLinkedin className="icon"/></Button></a>
                        <a  target="_blank" href="https://github.com/chrystophermedeiros"><Button className="button" ><FiGithub className="icon" /></Button></a>
                    </ContainerButton>
                </Card>
                <MyImg src={I} alt="" />
            </ContainerItems>
          

        </Container>
    )
}