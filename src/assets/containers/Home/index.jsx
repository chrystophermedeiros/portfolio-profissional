import { Container} from "./style";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Portfolio } from "../../components/Portfolio";
import { Main } from "../../components/Main";
import { Certificates } from "../../components/Certificates";

export function Home() {
    return (
        <Container isDark >
            <Header/>
            <Main/>
            <About/>
            <Certificates/>
            <Portfolio />
        </Container>
    ) 
}