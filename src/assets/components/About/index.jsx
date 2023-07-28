import { Container, ContainerItems, AboutImg, Card } from "./style";
import I from "../../img/i/sobre.jpeg";
import { Titles } from "../Titles";

export function About() {
  return (
    <Container id={"sobre"}>
      <Titles>Sobre mim</Titles>
      <ContainerItems>
        <AboutImg src={I} alt="" />
        <Card>
          <p>
            Sou um desenvolvedor Front End com experiência em análise de TI e
            cursando a pós-graduação em Engenharia de Software, sou
            especializado em HTML, CSS, JavaScript e frameworks como React.
            Tenho habilidades comprovadas como freelancer, entregando soluções
            de alta qualidade para clientes diversos. Minha formação em Análise
            e Desenvolvimento de Sistemas, combinada com meu compromisso em me
            aprimorar constantemente, me permite acompanhar as últimas
            tendências e melhores práticas da indústria. Estou disponível para
            projetos desafiadores como freelancer, oferecendo resultados
            excepcionais no desenvolvimento Front End.
          </p>
        </Card>
      </ContainerItems>
    </Container>
  );
}
