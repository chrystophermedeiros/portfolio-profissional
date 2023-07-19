import { Container, ContainerItems } from "./style";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Main } from "../../components/Main";
import { Certificates } from "../../components/Certificates";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";

export function Home() {
  return (
    <Container isDark>
      <Header />
      <ContainerItems>
        <Main />
        <About />
        <Skills />
        <Certificates />
        <Projects />
      </ContainerItems>
    </Container>
  );
}
