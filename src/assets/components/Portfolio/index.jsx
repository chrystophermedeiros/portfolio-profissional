import { Container,ContainerItems, Card, ButtonContainer } from "./style";
import I from '../../img/sobre.svg'
import Carousel from 'react-elastic-carousel'
import {projects} from '../../utils/dadosPortfolio'
import { Button } from "../Button";
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
        {/* <h3>projetos realizado</h3> */}
        <ContainerItems >
            <Carousel itemsToShow={4}
            style={{ width: '90%' }}
            breakPoints={breakPoints}
            >
                {myProjec.map((obj) =>
                    <Card key={obj.id}>
                        <img src={obj.img} alt="" />
                        <p>{obj.name}</p>
                        <ButtonContainer>
                            <Button  btn1><a target="_blank" href={obj.path}>ver</a></Button>
                            <Button><a target="_blank" href={obj.github}>GitHub</a></Button>
                        
                        </ButtonContainer>
                        <Button>Sobre</Button>
                        
                    </Card>)}
            </Carousel>
        </ContainerItems>
    </Container>
    ) 
}