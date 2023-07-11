import  styled  from "styled-components";

export const Container = styled.div`
   
    width: 100%;
`



export const ContainerItems = styled.div`
  display: flex;
    padding: 30px;
    gap: 0px;
    
`

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;

    img{
        width: 80%;
    }

    
`

