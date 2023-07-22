import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FooterContainer } from './style';

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Chrystopher Medeiros</h4>
      <div className="links">
        <a href="https://github.com/chrystophermedeiros" target="_blank" rel="noopener noreferrer" aria-label="Link para o Github">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/chrystopher-medeiros" target="_blank" rel="noopener noreferrer" aria-label="Link para o Linkedin">
          <FiLinkedin />
        </a>
        <a href="https://api.whatsapp.com/send?phone=558898061512" target="_blank" rel="noopener noreferrer" aria-label="Link para entrar em contato via whatsapp">
          <FaWhatsapp />
        </a>
      </div>
    </FooterContainer>
  );
}