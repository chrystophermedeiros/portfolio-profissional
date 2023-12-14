import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 5%;
  /* background: ${(props) => (props.isDark ? '#14fae753' : '')}; */
`;

export const ContainerItems = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  gap: 5px;

  h1 {
    color: var(--color-white);
    background: linear-gradient(
      80deg,
      var(--color-primary-variant),
      var(--color-primary)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 700px) {
      font-size: 22px;
    }
  }

  .cv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cvContact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .border {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 994px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
    transition: transform 0.5s ease-in-out;
    text-align: center;
    font-size: 12px;

    img {
      width: 80%;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyImg = styled.img`
  width: 30%;
  border-radius: 25%;
  background: var(--color-primary);
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
  gap: 20px;
  margin-bottom: 10px;

  a {
    text-decoration: none;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
      height: 50px;
      width: 50px;
      border-radius: 50%;

      .icon {
        font-size: 25px;
      }
    }
  }
`;

export const Scroll = styled.div`
  margin-top: 10px;

  .contato {
    margin-top: 20px;
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
    border: none;

    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;
