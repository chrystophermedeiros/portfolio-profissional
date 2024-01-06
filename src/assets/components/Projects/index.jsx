import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { FaSistrix } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { projects } from '../../data/projects';
import { Button } from '../Button';
import { Titles } from '../Titles';
import {
  Container,
  ContainerItems,
  Card,
  ButtonContainer,
  ImgCard,
  Boxmodal,
  ModalContainer,
} from './style';

export function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleOpen = (projectId) => setOpenModalId(projectId);
  const handleClose = () => setOpenModalId(false);
  const [openModalId, setOpenModalId] = React.useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tag.some((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1400, itemsToShow: 4 },
  ];

  return (
    <Container id={'projetos'}>
      <Titles>Projetos</Titles>
      <div className="input">
        <input
          type="text"
          placeholder="Projeto ou tecnologia"
          value={searchTerm}
          onChange={handleSearch}
        />{' '}
        <FaSistrix />
      </div>

      <ContainerItems>
        {filteredProjects.length > 0 ? (
          <Carousel
            itemsToShow={3}
            style={{ width: '100%' }}
            breakPoints={breakPoints}
          >
            {filteredProjects &&
              filteredProjects.map((obj) => (
                <Card key={obj.id}>
                  <ImgCard className="cardImg" src={obj.img} />
                  <p>{obj.name}</p>
                  <ButtonContainer className="contentButton">
                    <a target="_blank" href={obj.path} rel="noreferrer">
                      <Button className="button" btn1>
                        Visitar{' '}
                      </Button>
                    </a>
                    <a target="_blank" href={obj.github} rel="noreferrer">
                      <Button className="button">
                        Github <FiGithub />
                      </Button>
                    </a>
                  </ButtonContainer>
                  <details onClick={() => handleOpen(obj.id)}></details>
                  <ModalContainer
                    open={openModalId === obj.id}
                    onClose={handleClose}
                  >
                    <Boxmodal>
                      <article className="title-about">
                        <h3>Sobre:</h3>
                        <button className="button-close" onClick={handleClose}>
                          X
                        </button>
                      </article>
                      <p>{obj.about}</p>
                      <h3>Tecnologias:</h3>
                      <div className="tec">
                        {obj.tag.map((tag) => (
                          <div className="abou-itens" key={tag.id}>
                            <img src={tag.img} alt="" />
                            <p>{tag.name}</p>
                          </div>
                        ))}
                      </div>
                    </Boxmodal>
                  </ModalContainer>
                </Card>
              ))}
          </Carousel>
        ) : (
          <p>Projeto não encontrado 🙁</p>
        )}
      </ContainerItems>
    </Container>
  );
}
