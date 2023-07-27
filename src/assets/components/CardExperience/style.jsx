import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    border-radius: 20px;
  }

  .MuiTabs-flexContainer {
    display: flex;
    flex-direction: grid;
    justify-content: center;
    align-items: center;
    color: white;

    border-radius: 19px;
    border: none;
  }

  .MuiTabs-indicator {
    background: var(--color-primary);
  }
`;
