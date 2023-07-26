import styled from "styled-components";
export const Container = styled.section`
  height: 100%;
  width: 100%;
  

  h1 {
        text-align: center;
        padding-top: 90px;
    }

`;

export const ContainerItems = styled.div`
  img{
    width: 40px;
  }

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

`;

export const Card = styled.div`
border: 2px solid black;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;



  @media (max-width: 994px) {
  }

  &:hover {
    /* background-color: transparent; */
    transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
