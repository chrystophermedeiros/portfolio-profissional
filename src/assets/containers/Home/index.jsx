import { Container} from "./style";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Main } from "../../components/Main";
import { Certificates } from "../../components/Certificates";
import { Projects } from "../../components/Projects";

export function Home() {
    return (
        <Container isDark >
            <Header/>
            <Main/>
            <About/>
            <Certificates/>
            <Projects />
        </Container>
    ) 
}