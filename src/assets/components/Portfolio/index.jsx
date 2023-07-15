import { Container, ContainerItems, Card, ButtonContainer, ImgCard,} from "./style"
import Carousel from 'react-elastic-carousel'
import { projects } from '../../utils/dadosPortfolio'
import { Button } from "../Button";
import React, { useState } from 'react'
import { FaSistrix } from 'react-icons/fa'
import { FiGithub} from 'react-icons/fi'

export function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
      <div className="input"><input type="text" placeholder="Procure um projeto" value={searchTerm} onChange={handleSearch} /> <FaSistrix/></div>

      <ContainerItems>
        {filteredProjects.length > 0 ? (
          <Carousel
            itemsToShow={3}
            style={{ width: '100%' }}
            breakPoints={breakPoints}
          >
            {filteredProjects.map((obj) => (
              <Card className="card" key={obj.id}>
                <ImgCard isImg={obj.img}></ImgCard>
                <p>{obj.name}</p>
                <ButtonContainer className="contentButton">
                  
                  <a target="_blank" href={obj.path}><Button className="button" btn1 >Visitar </Button></a>
                  <a target="_blank" href={obj.github}><Button className="button"  >Github <FiGithub /></Button></a>
                </ButtonContainer>
              
              </Card>
            ))}
          </Carousel>
        ) : (
          <p>Projeto não encontrado 🙁</p>
        )}
      </ContainerItems>
    </Container>

  )
}
