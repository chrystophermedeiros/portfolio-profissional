import { List, X } from 'phosphor-react';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, MobileIcon, NavMenu, Icons } from './style';

export function Header({ handleDarkModeToggle, icon }) {
  const [changeBackground, setChangeBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <div className="mobile-content">
        <Link>
          <a href="/">
            {'<CMS>'.split('').map((letter, index) => {
              return (
                <span key={index} className="logo-name">
                  {letter}
                </span>
              );
            })}
          </a>
        </Link>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </div>
      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <a href="#home">
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="#sobre">
              <span>Sobre</span>
            </a>
          </li>

          <li>
            <a href="#habilidades">
              <span>Habilidades</span>
            </a>
          </li>

          <li>
            <a href="#experience">
              <span>Experiência</span>
            </a>
          </li>

          <li>
            <a href="#projetos">
              <span>Projetos</span>
            </a>
          </li>

          <li>
            <a href="#contato">
              <span>Contato</span>
            </a>
          </li>
          <li>
            <a>
              <span onClick={handleDarkModeToggle}>{icon}</span>
            </a>
          </li>
        </ul>

        <Icons>
          <a
            href="https://github.com/chrystophermedeiros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para o Github"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chrystopher-medeiros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para o Linkedin"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5588998061512"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para entrar em contato via whatsapp"
          >
            <FaWhatsapp />
          </a>
        </Icons>
      </NavMenu>
    </Container>
  );
}
