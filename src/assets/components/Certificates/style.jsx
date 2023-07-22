import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;

  h1 {
    text-align: center;
    padding-top: 90px;
  }

  p{
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

  width: 100%;
 
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    height: 600px;
    width: 600px;

  }

  .swiper-slide {
    height: 85%;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: flex;
    border-radius: 30px;
    height: 70%;
    margin: 0;
    padding: 20px;
    object-fit: cover;
  }

  .skills{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  
  
  
    img{
      width: 40px;
      padding: 0;
      border-radius: 0;
    
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  
  background-color: var(--color-bg-variant);

  &:hover {
    background-color: transparent;
    border: 3px solid aqua;
    transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
