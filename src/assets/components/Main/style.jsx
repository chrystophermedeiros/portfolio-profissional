import styled from "styled-components";


export const Container = styled.div`
  
    height: 100%;
    width: 90%;
    margin: 0 5%;
    /* background: ${(props) => props.isDark ? '#14fae753' : ''}; */
`

export const ContainerItems = styled.div`
    width: 80%;
    margin: 10% 10% 0 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 5px;
    
    @media (max-width: 994px) {

        flex-direction: column-reverse;
        gap: 1.5rem;
        transition: transform 0.5s ease-in-out;
        text-align: center;
        font-size: 12px;

    img{

        width: 80%;

    }
  }
`

export const Card = styled.div`
`

export const MyImg = styled.img`
    width: 30%;
    border-radius:25%;
    background: var(--color-primary);
`

export const ContainerButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 10%;
    gap: 20px;
    margin-bottom: 10px;
    

    a{
        
        text-decoration: none;

        .button{
             display: flex;
             justify-content: center;
             align-items: center;
             gap: 3px;
             height: 50px;
             width: 50px;
             border-radius: 50%;
           
            
             .icon{
              font-size: 30px;
            
        }
   
        }

       
    }
    
`