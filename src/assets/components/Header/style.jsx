import  styled  from "styled-components";

export const Container = styled.header`

   width: 100%;
   
   z-index: 2;
  position: fixed;
  top: 0;
  padding: 2px 50px;
  background-color: ${(props) =>
    props.changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.7s ease-in-out;

  min-height: 20px;

  :hover{
    
  }


`



export const ContainerItems = styled.div`
   
    

    ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 30px;
        list-style:none;
        
    }
    li{
      
        
    }
    
`

