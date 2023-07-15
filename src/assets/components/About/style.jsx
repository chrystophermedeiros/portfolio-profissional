import styled from "styled-components";

export const Container = styled.div`
  
    width: 80%;
    margin: 0 10%;
    h1{
        text-align: center;
        padding: 30px;
    }
`



export const ContainerItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 20px;

    @media (max-width: 994px) {

    flex-direction: column;
    gap: 1.5rem;
    transition: transform 0.5s ease-in-out;

    img{
    width: 80%;
   
}
}
    
`

export const Card = styled.div`
    
`

export const AboutImg = styled.img`
    width: 40%;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;
    overflow-clip-margin: content-box;
    overflow: clip;
    border-radius: 10%;
   
`