import { Container, ContainerItems, AboutImg, Card } from "./style"
import I from '../../img/sobre.svg'

export function About() {
    return (
        <Container id={"sobre"}>
            <h1>Sobre Mim</h1>
            <ContainerItems>
                <AboutImg src={I} alt="" />
                <Card>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae reprehenderit iure aut, ad labore debitis maiores voluptas culpa eveniet dolore nihil laborum modi, enim nostrum minima incidunt doloribus. Aliquam, quam!</p>
                </Card>

            </ContainerItems>
        </Container>
    )
}