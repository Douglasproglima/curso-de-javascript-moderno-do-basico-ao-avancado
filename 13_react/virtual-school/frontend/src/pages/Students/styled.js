import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const StudentContainer = styled.div`
  margin-top: 20px;

  a {
    color: ${colors.success};
  }

  a:hover {
    color: ${colors.white};
  }

  a:active {
    color: ${colors.gray};
  }

  div {
    text-decoration-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid ${colors.indigo};
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NewStudent = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;