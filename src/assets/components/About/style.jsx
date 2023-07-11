import  styled  from "styled-components";

export const Container = styled.div`
    
    width: 100%;
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
    
`

export const Card = styled.div`
    
`

export const AboutImg = styled.img `
    width: 40%;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;
    overflow-clip-margin: content-box;
    overflow: clip;
    border-radius: 30%;
   
`