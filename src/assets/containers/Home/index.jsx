import React, { useEffect, useState, useMemo } from 'react';
import { MdLightMode, MdModeNight } from 'react-icons/md';

import {
  Header,
  About,
  Hero,
  Projects,
  Skills,
  Contact,
  Footer,
  ScrollTop,
  Experience,
} from '../../components/';
import { Container, ContainerItems } from './style';

export function Home() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('isDark') === 'true',
  );

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleDarkModeToggle = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const icon = useMemo(
    () => (isDark ? <MdLightMode /> : <MdModeNight />),
    [isDark],
  );

  return (
    <Container isDark={isDark}>
      <Header handleDarkModeToggle={handleDarkModeToggle} icon={icon} />
      <ContainerItems id="home">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ScrollTop />
        <Contact />
      </ContainerItems>
      <Footer />
    </Container>
  );
}
