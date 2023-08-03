import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;
`;

export const ContainerItems = styled.div`
width: 100%;
height: 100%;
a{
  text-decoration: none;
}
  .container.contact_container {
    width: 68%;
    display: grid;
    grid-template-columns: 40% 58%;
    gap: 8%;
  }

  .contact_options {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .contact_option {
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
 
    border: 1px solid transparent;
    transition: var(--transition);
  }

  .contact_option:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  .contact_option-icon {
    font-size: 1.5rem;
  
  }

  .contact_option a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }

  border: 2px solid transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background-color: var(--color-bg-variant);
   a{
    text-decoration: none;
    list-style: none;
    color: aqua;

    &:hover{
      opacity: 0.6;
    }
   }

  }



  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
  }

  /* ===================== ESTILOS PARA TABLETS ===================== */

  @media screen and (max-width: 1024px) {
    .container.contact_container {
      grid-template-columns: 1fr;
      gap: 2rem;
      
    }
  }

  /* ===================== ESTILOS PARA CELULARES ===================== */

  @media screen and (max-width: 600px) {
    .container.contact_container {

      width: 100%;
    }
  }
`;
