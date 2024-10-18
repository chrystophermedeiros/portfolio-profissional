import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => (props.isDark ? '#00000039' : '#00000097')};

  .teste {
  }
`;

export const ContainerItems = styled.div`
  padding-top: 60px;
`;
