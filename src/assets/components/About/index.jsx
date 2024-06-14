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
            Sou um profissional apaixonado por tecnologia, graduado em Análise e
            Desenvolvimento de Sistemas pela UNIFACS e pós-graduado em
            Engenharia de Software pela Estácio. Tenho buscado oportunidades
            como desenvolvedor web para aplicar e expandir conhecimento e
            experiência na área. Possuo certificações em CSS, HTML, JavaScript,
            TypeScript e Node.js pelo DevClub, o que demonstra comprometimento
            em manter atualizado com as mais recentes tecnologias e práticas da
            indústria. Estou determinado a aprimorar minhas habilidades em
            tecnologia e contribuir de forma significativa em projetos
            desafiadores, trabalhando em colaboração com profissionais
            experientes.
          </p>
        </Card>
      </ContainerItems>
    </Container>
  );
}
