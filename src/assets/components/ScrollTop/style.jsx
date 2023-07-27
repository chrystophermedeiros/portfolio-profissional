import styled from 'styled-components'

export const Scroll = styled.div`
  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    background: aqua;
    padding: .5rem .7rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #000000;
    z-index: 9;
    
    &:hover {
      opacity: 0.6;
    }
  }
`