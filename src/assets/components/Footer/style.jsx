import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 5rem;
  border-top: 1px solid aqua;
  padding: 1.4rem 0;
  background-color: var(--color-bg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  h4 {
    font-size: 1.1rem;
    color: aqua;
  }

  .links {
    
    cursor: pointer;
    display: flex;
    gap: 9px;
    font-size: 1.4rem;
    color: aqua;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        color: aqua;
      }
    }
  }
`