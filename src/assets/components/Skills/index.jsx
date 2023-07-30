import {skills} from "../../data/skills";
import { Titles } from "../Titles";
import { Container, ContainerItems, Card } from "./style";
export function Skills() {
  return (
    <Container id="habilidades">
        <Titles>Habilidades</Titles>
      <ContainerItems>
          {skills && skills.map((obj) => (
            <Card isBorder = {obj.color}>
                <img src={obj.img} alt="" />
                <p>{obj.title}</p>
            
            </Card>
       
          ))}
      </ContainerItems>
    </Container>
  );
}
