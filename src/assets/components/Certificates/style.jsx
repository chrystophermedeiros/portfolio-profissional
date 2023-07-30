import styled from "styled-components";

export const Container = styled.section`
 height: 100%;
 border: 0px solid aqua;
 border-radius: 20px;
 overflow: hidden;
  .box{
    
    @media (max-width: 600px) {
      height: 250px;
   
  }

  @media (min-width: 700px) {
    height: 400px;
  
    
  }
  }
  .containerItens{
   
    img{
      border-radius: 0;
    }
 
 

  }
  
  .header {
    background-color: var(--color-bg-variant);
    color: var(--color-white);
    display: flex;
    justify-content: center;
  
    

  }

  .footer {
      background-color: var(--color-bg-variant);
      
    }
  
`;
