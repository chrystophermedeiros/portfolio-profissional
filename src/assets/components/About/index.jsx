import React from 'react';

import I from '../../img/i/sobre.jpeg';
import { Titles } from '../Titles';
import { Container, ContainerItems, AboutImg, Card } from './style';

export function About() {
  return (
    <Container id={'sobre'}>
      <Titles>Sobre mim</Titles>
      <ContainerItems>
        <AboutImg src={I} alt="" />
        <Card>
          <p>
            Programador Front-End apaixonado por tecnologia, possuo habilidades
            em React, JavaScript, Node.js, Styled-components, Material UI, HTML
            e CSS. Tenho experiência em projetos de desenvolvimento web,
            oferecendo soluções personalizadas e criativas. Especializado em
            criar interfaces de usuário interativas e responsivas. Habilidades
            sólidas em bibliotecas e frameworks populares, como React, para
            construir aplicações web modernas e escaláveis. Focado na qualidade
            do código e atenção aos detalhes. Pronto para enfrentar desafios
            técnicos complexos. Aberto a novas oportunidades para criar
            experiências digitais de alto nível.
          </p>
        </Card>
      </ContainerItems>
    </Container>
  );
}
