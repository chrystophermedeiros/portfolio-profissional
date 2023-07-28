import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  
  

  p {
    font-size: 16px;
  }

  .input {
    width: 80%;
    margin: 2% 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    color: aqua;

    input {
      background: transparent;
      font-size: 20px;
      color: aqua;
      width: 100%;
    }
  }
`;

export const ContainerItems = styled.div`
  .swiper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .swiper-slide {

    text-align: center;
    font-size: 18px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  }

  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
      width: 40px;
      padding: 0;
      border-radius: 0;
    }
  }
`;

export const Card = styled.div`
  background-color: var(--color-bg-variant);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  img {
    height: 70%;
    width: 70%;
    border-radius: 30px;
    margin: 0;
    padding: 20px;
  }

  &:hover {
    background-color: transparent;
    border: 3px solid aqua;
    transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
