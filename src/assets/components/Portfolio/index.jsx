import { Container, ContainerItems, Card, ButtonContainer, ImgCard, Input } from "./style";
import Carousel from 'react-elastic-carousel';
import { projects } from '../../utils/dadosPortfolio';
import { Button } from "../Button";
import React, { useState } from 'react';

export function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 }
  ];

  return (
    <Container id={"portfolio"}>
      <h1>Portfólio</h1>
      <Input type="text" placeholder="Procure um projeto" value={searchTerm} onChange={handleSearch} />
  
      <ContainerItems>
        {filteredProjects.length > 0 ? (
          <Carousel
            itemsToShow={3}
            style={{ width: '100%' }}
            breakPoints={breakPoints}
          >
            {filteredProjects.map((obj) => (
              <Card key={obj.id}>
                <ImgCard isImg={obj.img}></ImgCard>
                <p>{obj.name}</p>
                <ButtonContainer>
                  <Button btn1 to={obj.path}>ver</Button>
                  <Button to={obj.github}>GitHub</Button>
                </ButtonContainer>
                <Button>Sobre</Button>
              </Card>
            ))}
          </Carousel>
        ) : (
          <p>Nenhum projeto encontrado.</p>
        )}
      </ContainerItems>
    </Container>
  
  )
}
