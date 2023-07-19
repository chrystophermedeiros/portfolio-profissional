import skills from "../../data/dadosSkills";
import { Container, ContainerItems, Card } from "./style";
export function Skills() {
  return (
    <Container>
        <h1>Skills</h1>
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
