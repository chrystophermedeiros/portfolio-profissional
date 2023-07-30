import React, { useEffect, useState, useMemo } from "react";
import { Container, ContainerItems } from "./style";
import { Header, About, Main, Certificates, Projects, Skills, Footer, Contact, ScrollTop, Experience } from "../../components/";
import { MdLightMode, MdModeNight } from "react-icons/md";



export function Home() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("isDark") === "true");

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  const handleDarkModeToggle = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const icon = useMemo(() => (isDark ? <MdLightMode /> : <MdModeNight />), [isDark]);

  return (
    <Container isDark={isDark}>
      <Header handleDarkModeToggle={handleDarkModeToggle} icon={icon} />
      <ContainerItems id="home">
        <Main />
        <About />
        <Skills />
        <Experience/>
        <Projects/>
        <ScrollTop />
       <Contact/>
      </ContainerItems>
      <Footer/>
    </Container>
   
  );
}

