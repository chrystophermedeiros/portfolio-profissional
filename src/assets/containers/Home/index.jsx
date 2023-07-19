import React, { useState } from 'react';
import { Container, ContainerItems } from "./style";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Main } from "../../components/Main";
import { Certificates } from "../../components/Certificates";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";
import { MdLightMode, MdModeNight } from 'react-icons/md';

export function Home() {
    const [isDark, setIsDark] = useState(false);
    const [icon, setIcon] = useState(<MdLightMode />);

  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
    setIcon(isDark ? <MdLightMode /> : <MdModeNight />);
  };

  return (
    <Container isDark={isDark}>
      <Header handleDarkModeToggle={handleDarkModeToggle} icon={icon} />
      <ContainerItems>
        <Main />
        <About />
        <Skills />
        <Certificates />
        <Projects />
      </ContainerItems>
    </Container>
  );
}
