import styled from 'styled-components';
export const Container = styled.section`
  height: 100%;
  width: 100%;
`;

export const ContainerItems = styled.div`
  img {
    width: 40px;
  }

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Card = styled.div`
  border: 2px solid transparent;
  gap: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  .img-work {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }

  background: var(--color-bg-variant);
  padding: 10px;

  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    p {
      line-height: 25px;
      margin-bottom: 20px;
      height: 60%;
    }
    h2 {
      color: var(--color-primary);
    }

    .techs {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      img {
        width: 40px;
      }

      .containerTechs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  &:hover {
    border: 2px solid var(--color-primary);
    background-color: transparent;
    transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      line-height: 25px;
    }

    .institution {
      font-size: 1.5rem;
      color: var(--color-primary);
    }

    .oficce {
      color: var(--color-primary-variant);
    }

    .conatinerLeft {
      display: flex;
      gap: 10px;

      .left {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
