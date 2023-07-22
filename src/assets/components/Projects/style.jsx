import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #ffffff;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media (max-width: 994px) {
      display: none;
    }
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: transparent;
  }

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: var(--color-bg-variant);
  padding: 20px;
  margin: 5px;

  .skills {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10%;
    position: absolute;
    z-index: 10;

    img {
      width: 40px;
    }
  }
  @media (max-width: 994px) {
  }

  &:hover {
 
    background: #1a1a1ae1;
    border: 3px solid aqua;
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

   .cardImg{
    transition: opacity 1s ease;
        opacity: 10%;
    }

    
    .skills {
    transition: opacity 2s ease;
    opacity: 100;
  
  }
  }
   


 
`;

export const ImgCard = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.isImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
