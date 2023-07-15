import  styled  from "styled-components";

export const Container = styled.section`

    width: 90%;
    margin: 0 5%;
    h1 {
        text-align: center;
        padding: 30px;
    }

    .input{
        width: 80%;
        margin: 2% 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        font-size: 20px;
        border: 1px solid white;
        border-radius: 20px;
        padding: 10px ;
        color: aqua;

    input{
        background: transparent;
        font-size: 20px;
        color: aqua;
        width: 100%;
    }
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


    &:hover {
    background-color: transparent;
    border: 1px solid white;
    transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    &::before{
        content: "ffff";
          height: 97%;
          width: 16%;
          background-color: #0d83b6a1;
          border-radius: 20px;
          position: absolute;
          z-index: 10;
    }

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

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
   


    a{
        text-decoration: none;
        .button{
             display: flex;
             justify-content: center;
             align-items: center;
             gap: 3px;
             width: 100%;
             padding: 0 20px;

             
        }
   
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





