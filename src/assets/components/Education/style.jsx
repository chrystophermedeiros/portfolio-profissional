import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;
`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
  align-items: center;
  justify-content: center;

  .MuiTimeline-root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
