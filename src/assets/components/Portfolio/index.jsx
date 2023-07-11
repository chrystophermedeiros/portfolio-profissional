import { Container,ContainerItems, Card } from "./style";
import I from '../../img/sobre.svg'
import { projects } from "../utils/dadosPortfolio";
import Carousel from 'react-elastic-carousel'

export function Portfolio() {
const myProjec = projects

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
    return (
    <Container>
        <h1>Portfólio</h1>
        <ContainerItems >
            <Carousel itemsToShow={4}
            style={{ width: '90%' }}
            breakPoints={breakPoints}
            >
                {myProjec.map((obj) =>
                    <Card key={obj.id}>
                        <img src={obj.img} alt="" />
                        <p>{obj.name}</p>
                        <a target="_blank" href={obj.path}>ver</a>
                        <a target="_blank" href={obj.path}>GitHub</a>
                    </Card>)}
            </Carousel>
        </ContainerItems>
    </Container>
    ) 
}