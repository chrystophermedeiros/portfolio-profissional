import styled from 'styled-components'

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
    padding: .7rem .7rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: #000000;
    z-index: 9;
    
    &:hover {
      opacity: 0.6;
    }
  }
`