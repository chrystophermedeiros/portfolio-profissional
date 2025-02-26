import styled from 'styled-components';

export const Container = styled.header`
  box-shadow: black 0px 10px 30px 1px;
  position: fixed;
  width: 100%;
  top: 0;

  font-weight: 600;
  font-size: 1.2rem;

  z-index: 10;
  background: var(--color-bg);

  a {
    color: var(--color-primary);
  }

  @media (min-width: 995px) {
    display: flex;
    height: 4rem;
    justify-content: space-around;
    padding: 1rem 0;
    align-items: center;
  }

  @media (min-width: 2000px) {
    display: flex;
    justify-content: space-evenly;
  }

  .mobile-content {
    font-weight: 700;
    font-size: 1.2rem;

    a {
      display: flex;
      align-items: center;

      .logo {
        margin-right: 0.5rem;
      }

      .logo-name {
        font-size: 1.2rem;
        transition: all;
        transition-duration: 500ms;
        margin: 20% 1%;

        &:hover {
          color: white;
          transition-duration: 100ms;
          margin-top: -0.5rem;
        }
      }
    }

    @media (max-width: 994px) {
      margin: 0rem 1rem;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    z-index: 30;
  }
`;

export const NavMenu = styled.div`
  .active {
    color: var(--color-primary);
  }
  .constrast {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    svg {
      color: var(--color-black);
    }
  }
  @media (max-width: 994px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 50vw;
    background: #1a1a1a;
    z-index: 10;
    opacity: 0.95;
    position: fixed;
    transform: ${({ open }) =>
      open ? 'translateX(100%)' : 'translateX(200%)'};
    transition: transform 0.5s ease-in-out;
  }

  ul {
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;

    a {
      gap: 2px;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--color-white);
      height: 1rem;
      cursor: pointer;

      span {
        line-height: 1.08;
        white-space: nowrap;
        position: relative;

        &:before {
          content: '';
          height: 2px;
          width: auto;
          background-color: var(--color-primary-variant);
          border-radius: 0px 0px 4px 4px;
          position: absolute;
          bottom: -6px;
          left: 0px;
          right: 0px;
          opacity: 0;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
        }
      }

      &:hover {
        color: var(--color-primary);
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1;
        }
      }
    }

    @media (max-width: 994px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 1.5rem;
      gap: 1.8rem;
    }
  }
`;

export const Icons = styled.div`
  @media (min-width: 995px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  margin-top: 1.7rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
