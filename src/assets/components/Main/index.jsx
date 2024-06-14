import { ArrowDown } from 'phosphor-react';
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import CV from '../../img/cv/cv.pdf';
import I from '../../img/i/eu.png';
import { Button } from '../Button';
import {
  Container,
  ContainerItems,
  MyImg,
  Card,
  ContainerButton,
  Scroll,
} from './style';

export function Main() {
  return (
    <Container>
      <ContainerItems>
        <Card>
          <h2>Olá, meu nome é, </h2>
          <h1>Chrystopher Medeiros</h1>
          <h2>Desenvolvedor Front - End</h2>
          <ContainerButton>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chrystopher-medeiros"
              rel="noreferrer"
            >
              <Button className="button" btn1>
                <FiLinkedin className="icon" />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://github.com/chrystophermedeiros"
              rel="noreferrer"
            >
              <Button className="button">
                <FiGithub className="icon" />
              </Button>
            </a>
          </ContainerButton>
          <div className="cvContact">
            <a className="cv" target="_blank" href={CV} rel="noreferrer">
              <Button btn1>
                Visualizar CV <AiOutlineDownload className="icon" />
              </Button>
            </a>
            <Scroll>
              <a href="#contato">
                <span className="contato">
                  Contato <ArrowDown weight="bold" />
                </span>
              </a>
            </Scroll>
          </div>
        </Card>
        <MyImg src={I} alt="" />
      </ContainerItems>
    </Container>
  );
}
