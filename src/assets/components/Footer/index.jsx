import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import packageJson from '../../../../package.json';
import { FooterContainer } from './style';
const currentDate = new Date().getFullYear();
export function Footer() {
  return (
    <FooterContainer id="footer">
      <h4> &copy; {currentDate} Chrystopher Medeiros</h4>
      <div className="links">
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
          href="https://api.whatsapp.com/send?phone=558898061512"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para entrar em contato via whatsapp"
        >
          <FaWhatsapp />
        </a>
        <h4>version:{packageJson.version}</h4>
      </div>
    </FooterContainer>
  );
}
