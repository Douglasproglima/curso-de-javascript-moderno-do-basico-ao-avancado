import Styled, { createGlobalStyle } from 'styled-components';
import {
  backgroudBody,
  indigo,
  indigoHouver,
  indigoActive,
  backgroudForm,
  boderShadown,
  white,
  dark,
  success,
  error,
} from '../config/colors';

export default createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    color: ${dark};
  }

  html, body, #root {
    height: 100%
  }

  body {
    margin: 0;
    padding: 0;
    text-align: left;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.3em;
    font-weight: 400;
    line-height: 1.5em;
    background-color: ${backgroudBody};
    background: ${backgroudBody};
    color: ${dark};
  }

  h1 {
  margin-top: 15px;
  text-transform: uppercase;
  text-align: center;
  }

  h2 {
    text-transform: uppercase;
    text-align: center;
  }

  hr {
    margin: 20px 0;
    border: 2px;
    border-top: 3px solid ${indigo};
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    width: 10%;
    height: 43px;
    margin-top: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-top: 2px;
    padding-left: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    transition: all 600ms;
  }

  li:hover {
    background: ${indigoHouver};
  }

  li .edit {
    margin-right: 5px;
    color: ${success};
  }

  li .delete {
    margin-right: 5px;
    color: ${error};
  }

  li .edit, li .delete {
    cursor: pointer;
    transition: all 600ms;
  }

  li span {
    display: flex;
    align-items: center;
  }


  /* Tabela Superior */
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 2px solid ${indigoActive};
    margin-top: 20px;
  }

  th, td {
    text-align: center;
    padding: 10px;
  }

  tr:nth-child(even) {
    background-color: ${indigoActive};
  }
`;

export const Container = Styled.section`
  max-width: 640px;
  margin: 50px auto;
  border-radius: 15px;
  background: ${backgroudForm};
  box-sizing: border-box;
  box-shadow: 0em 0rem 5rem ${boderShadown};
  border: 3px solid ${indigoHouver};
  padding: 30px;
  text-align: center;
  colors: ${white};
`;
