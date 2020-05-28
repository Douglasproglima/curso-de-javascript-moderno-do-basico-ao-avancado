import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? '#5b69bc' : '#10c469')};
  small {
    font-size: 32px;
    margin-left: 15px;
    color: #fff;
  }
`;

export const Paragrafo = styled.p`
  font-size: 48px;
  color: #605499;
  padding: 10px;
`;
