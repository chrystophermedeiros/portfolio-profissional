import styled from 'styled-components';

export const Scroll = styled.div`
  button {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    background: var(--color-primary);
    padding: 0.7rem 0.7rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: var(--color-white);
    z-index: 9;
    @media (max-width: 994px) {
        left: 1rem;
        right: auto;
      }
    

    &:hover {
      opacity: 0.6;
    }
  }

  
`;
