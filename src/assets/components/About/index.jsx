import React from 'react';

import { Titles } from '../Titles';
import { Container, ContainerItems, Card } from './style';

export function About() {
  return (
    <Container id={'sobre'}>
      <Titles>Sobre mim</Titles>
      <ContainerItems>
        <Card>
          <p>
            Desde cedo, a tecnologia me fascina, e essa paixão me levou a
            construir uma carreira como desenvolvedor front-end. Com uma
            formação em Análise e Desenvolvimento de Sistemas pela UNIFACS e
            pós-graduação em Engenharia de Software pela Estácio, estou sempre
            em busca de aprimorar minhas habilidades e acompanhar as tendências
            mais recentes do mercado. Atualmente, meu foco está em criar e
            gerenciar o front-end de sites e aplicativos web, com o objetivo de
            melhorar a experiência do usuário e contribuir para o sucesso dos
            projetos em que me envolvo. Se tiver interesse em conhecer meu
            trabalho, você pode conferir alguns dos meus projetos na seção
            dedicada. Além do desenvolvimento, tenho um grande prazer em
            compartilhar o que aprendi ao longo dos anos, seja ajudando a
            comunidade Dev com dicas práticas ou oferecendo insights sobre
            Desenvolvimento Web no LinkedIn. Estou sempre disponível para trocar
            ideias e conectar com outras pessoas da área. Se houver uma
            oportunidade de trabalho que combine com minhas habilidades, ficarei
            feliz em conversar. Vamos nos conectar!
          </p>
        </Card>
      </ContainerItems>
    </Container>
  );
}
