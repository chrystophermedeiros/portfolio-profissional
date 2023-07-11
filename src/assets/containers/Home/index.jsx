import { Container,ContainerItems, MyImg, Card } from "./style";
import I from '../../img/eu.svg'
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Portfolio } from "../../components/Portfolio";

export function Home() {
    return (
        <Container isDark >
            <Header/>
            <ContainerItems>
                
                <Card>
                    <h1>Seja bem vindo,<span> prazer Chrystopher Medeiros</span> </h1>
                    
                    <h2>Desenvolvedor Front - End</h2>
                </Card>
                <MyImg src={I} alt="" />
            </ContainerItems>

            <About/>
            <Portfolio/>
            
            
            

        </Container>
    ) 
}