import  styled  from "styled-components";

export const Container = styled.div`
  
    height: 100%;
    width: 100%;
    /* background: ${(props) => props.isDark ? '#14fae753' : '' }; */
   
`



export const ContainerItems = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 5px;
    margin: 10% 10%;
    
    
`

export const Card = styled.div`
    
   
`

export const MyImg = styled.img `
    width: 30%;
    border-radius:25%;
    background: var(--color-primary);
    
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 25%;
    margin:0 40%;
    padding: 20px;
    
`