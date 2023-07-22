import styled from 'styled-components'

export const Scroll = styled.div`
  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    background: #00ffd5;
    padding: .5rem .7rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #000000;
    z-index: 9;
    
    &:hover {
      background: #0048ff;
    }
  }
`