import  styled  from "styled-components";

export const Container = styled.section`

    width: 90%;
    margin: 0 5%;
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
    
    height: 500px;
    width: 500px;
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

export const ImgCard = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
    border-radius: 10px;

    background-image: url(${(props) => props.isImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const Input = styled.input`
    width: 80%;
    margin: 2% 10%;
    background: transparent;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    color: aqua;
    
`

