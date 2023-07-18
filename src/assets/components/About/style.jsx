import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 90%;
  margin: 0 5%;
  h1 {
    text-align: center;
    padding-top: 90px;
  }

  p {
    text-align: justify;
    letter-spacing: 1px;

    @media (max-width: 994px) {
        letter-spacing: 0px;
    }
  }
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 20px;

  @media (max-width: 994px) {
    flex-direction: column;
    gap: 1.5rem;
    transition: transform 0.5s ease-in-out;

    img {
      width: 100%;
    }
  }
`;

export const Card = styled.div``;

export const AboutImg = styled.img`
  width: 40%;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition:
    opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s,
    transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;
  overflow-clip-margin: content-box;
  overflow: clip;
  border-radius: 10%;
`;
