import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .css-19kzrtu {
    padding: 10px;

  }
 
  .box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    border-radius: 20px;
  }

  .css-1nuo49t-MuiButtonBase-root-MuiTab-root{
    &:hover{
      color: var(--color-primary);
    }
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

  .css-1nuo49t-MuiButtonBase-root-MuiTab-root {
    @media (max-width: 994px) {
      display: flex;
      font-size: 14px;
      display: flex;
      padding: 1px;
    }
  }

  .MuiTabs-indicator {
    background: var(--color-primary);
  }
`;
