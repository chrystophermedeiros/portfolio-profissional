import styled from "styled-components";

export const Title = styled.h1`
  color: var(--color-primary);
  font-size: 2rem;
  text-align: center;
  padding-top: 90px;
  margin-bottom: 20px;
  transition: var(--transition);


  @media screen and (max-width: 800px) {
    
  }

  &:hover {
    color: var(--color-primary-variant);
    
  }
`;
