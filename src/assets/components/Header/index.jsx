import { List, X } from 'phosphor-react';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ImContrast } from 'react-icons/im';
import { Link } from 'react-router-dom';

import { Container, MobileIcon, NavMenu, Icons } from './style';

const links = [
  { id: 'home', text: 'Home' },
  { id: 'sobre', text: 'Sobre' },
  { id: 'habilidades', text: 'Habilidades' },
  { id: 'experience', text: 'Experiência' },
  { id: 'projetos', text: 'Projetos' },
  { id: 'contato', text: 'Contato' },
];

export function Header({ handleDarkModeToggle }) {
  const [changeBackground, setChangeBackground] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      links.forEach(({ id }) => {
        const element = document.getElementById(id);
        const footerHeight =
          document.getElementById('footer')?.offsetHeight || 0;
        if (element) {
          const offsetTop = element.offsetTop - footerHeight;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(id);
          }
        }
      });
    };

    window.onscroll = () => {
      setChangeBackground(window.pageYOffset > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <div className="mobile-content">
        <Link>
          <a href="/">
            {'<CMS>'.split('').map((letter, index) => (
              <span key={index} className="logo-name">
                {letter}
              </span>
            ))}
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
          {links.map(({ id, text }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeLink === id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(id);
                }}
              >
                <span>{text}</span>
              </a>
            </li>
          ))}
          <li>
            <a>
              <span className="constrast" onClick={handleDarkModeToggle}>
                Constraste
                <ImContrast />
              </span>
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
