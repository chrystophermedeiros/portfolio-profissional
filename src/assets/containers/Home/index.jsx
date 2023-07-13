import { Container,ContainerItems, MyImg, Card } from "./style";
import I from '../../img/eu.svg'
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Portfolio } from "../../components/Portfolio";
import { Main } from "../../components/Main";

export function Home() {
    return (
        <Container isDark >
            <Header/>
            <Main/>
            <About/>
            <Portfolio />
        </Container>
    ) 
}