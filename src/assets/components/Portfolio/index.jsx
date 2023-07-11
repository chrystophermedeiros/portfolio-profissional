import { Container,ContainerItems,Card } from "./style";
import I from '../../img/sobre.svg'
import { projects } from "../utils/dadosPortfolio";

export function Portfolio() {
const myProjec = projects
    return (
    <Container>
        <ContainerItems>
            {myProjec.map((obj) =>
            <Card key={obj.id}>
                <img src={obj.img} alt="" />
                <p>{obj.name}</p>
                <a target="_blank" href={obj.path}>ver</a>
            </Card>)}
        </ContainerItems>
    </Container>
    ) 
}