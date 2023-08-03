import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;
`;

export const ContainerItems = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border-radius: 20px;
  display: grid;

  padding: 0;
  margin: 0 -10%;

  h5 {
    color: var(--color-primary-variant);
  }



  .MuiTimelineConnector-root {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-variant);;
  }
`;
