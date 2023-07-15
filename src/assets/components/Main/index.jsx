import { Container, ContainerItems, MyImg, Card, ContainerButton } from "./style"
import I from '../../img/eu.svg'
import { Button } from "../Button"


export function Main() {
    return (
        <Container  >
            <ContainerItems>
                <Card>
                    <h1>Seja bem vindo, </h1>
                    <h2> prazer Chrystopher Medeiros</h2>
                    <h3>Desenvolvedor Front - End</h3>
                </Card>
                <MyImg src={I} alt="" />
            </ContainerItems>
            <ContainerButton>
                <Button>Git</Button>
                <Button>Git</Button>
            </ContainerButton>

        </Container>
    )
}