import  styled  from "styled-components";

export const Container = styled.div`
  
    width: 100%;
    h1 {
        text-align: center;
        padding: 30px;
    }
    

`



export const ContainerItems = styled.div`
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
    /* gap: 1.5rem; */
    display: flex;
    align-items: center;
    justify-content: center;
   
    
`

export const Card = styled.div`
    
    height: 350px;
    width: 700px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background-color: var(--color-bg-variant);
    padding: 10px;
    margin: 5px;
    overflow: hidden;
    
    


    img{
        height: 60%;
        width: 100%;
       
        border-radius: 10px;
    }
    

    
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
    width: 80%;
    margin-bottom: 10px;

    a{
        text-decoration: none;
    }

    a:visited {
    color: #555;
    }

    a:hover {
    color: #941a1a;
    }

    a:active {
        color: #920aed;
    }

`

