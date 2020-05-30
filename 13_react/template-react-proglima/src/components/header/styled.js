import styled from 'styled-components';
import { white, indigoHouver } from '../../config/colors';

export const Nav = styled.nav`
  background: ${indigoHouver};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${white};
    margin: 0 10px 0;
  }

  a:hover {
    color: ${indigoHouver};
  }
`;
