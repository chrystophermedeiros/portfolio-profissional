import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .box {
    display: flex;

    flex-grow: 1;
    height: 100%;
    width: 100%;
   
    background-color: var(--color-bg);

    @media (max-width: 994px) {
      flex-direction: column;
    }
  }

  color: aqua;


  .teste {
    display: flex;
 
    background-color: #fefefe14;
   
    @media (max-width: 994px) {
      width: 100%;
      align-items: center;
      justify-content: center;
     
  
    
    
    }

   
  }
  .doido {
    width: 100%;
  }
`;
