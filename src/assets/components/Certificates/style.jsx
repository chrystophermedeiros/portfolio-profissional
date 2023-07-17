import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;

  h1 {
    text-align: center;
    padding-top: 90px;
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
    border-radius: 20px;
    margin: 0 10%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    

.swiper {
  width:100%;
  height: 100%;
}

.swiper-slide {
    height: 500px;
   
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 80%;
  height: 80%;
  object-fit: cover;
}

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-variant);
    

  &:hover {
    background-color: transparent;
    border: 3px solid aqua;
    transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
