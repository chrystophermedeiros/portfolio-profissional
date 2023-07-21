import React, { useState } from "react";
import { Container, ContainerItems } from "./style";
import {
  Header,
  About,
  Main,
  Certificates,
  Projects,
  Skills,
} from "../../components/";

import { MdLightMode, MdModeNight } from "react-icons/md";

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
