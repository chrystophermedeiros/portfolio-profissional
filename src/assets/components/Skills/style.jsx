import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;

  h1 {
        text-align: center;
        padding-top: 90px;
    }

`;

export const ContainerItems = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Card = styled.div`
  height: 200px;
  background-color: var(--color-bg-variant);
  padding: 20px;
  margin: 5px;
  border:2px solid ${(props) => props.isBorder};
  border-radius: 20px;

  img{
    width: 100px;
  }
  @media (max-width: 994px) {
  }

  &:hover {
    background-color: transparent;
    transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
