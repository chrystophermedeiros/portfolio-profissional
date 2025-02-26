import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;
  @media (max-width: 994px) {
    width: 100%;
    margin: 0;
  }

  .rec-dot_active {
    background-color: var(--color-primary);
    box-shadow: none;

  }

  .rec-carousel-wrapper{
    @media (max-width: 994px) {
    position: relative;
    display: block;

    }
  }
  .rec-dot{
    @media (max-width: 994px) {
    position: relative;
    left: 2%;

    }
  }
  .rec.rec-arrow {
    background-color: var(--color-primary);
    color: #ffffff;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec-arrow-left {
    @media (max-width: 994px) {
    position: absolute;
    top: 92%;
    left: 70%;
    transform: scale(0.8);
    }
  }

  .rec-arrow-right {
    @media (max-width: 994px) {
      position: absolute;
      right: 2%;
      top: 92%;
      transform: scale(0.8);
      
    }
  }

  .rec.rec-arrow:hover {
    border: 2px solid var(--color-primary);
    background-color: #efefef;
    color: var(--color-primary);
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: transparent;
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
      color: var(--color-primary);
      width: 100%;

      @media (max-width: 994px) {
        font-size: 16px;
      }
    }
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .button-about {
    cursor: pointer;
    width: 50%;
    background-color: var(--color-accent);
    color: var(--color-white);
    border-radius: 30px;
    transition: var(--transition);
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const ModalContainer = styled(Modal)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-items: center;
  justify-content: center;
  .title-about {
    display: flex;
    justify-content: space-between;
  }

  .button-close {
    width: 40px;
    border: none;
    border-radius: 15px;
    background-color: #ff00009c;
    color: var(--color-white);
    cursor: pointer;
  }

  .abou-itens {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
`;

export const Boxmodal = styled(Box)`
  display: grid;
  flex-direction: column;
  background: transparent;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: var(--color-bg-variant);
  padding: 10px;
  width: 95%;
  margin: auto;
  border-radius: 20px;

  img {
    width: 40px;
  }
  .tec {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const Card = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: var(--color-bg-variant);
  padding: 20px;
  margin: 5px;

  &:hover {
    background: transparent;
    border: 3px solid aqua;
    transition: 0.2s ease-in-out;
    zoom: 1;

    .cardImg {
      transition: opacity 1s ease;
    }
    .skills {
      transition: opacity 1s ease;
      opacity: 100;
    }
  }
`;

export const ImgCard = styled.img`
  overflow: hidden;
  height: 80%;
  width: 100%;

  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      padding: 0 20px;
    }
  }
`;
