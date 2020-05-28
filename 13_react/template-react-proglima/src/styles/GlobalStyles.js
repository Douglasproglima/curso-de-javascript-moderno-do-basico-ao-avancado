import Styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --indigo: #675aa9;
    --indigo-houver: #7d6dca;
    --indigo-active: #605499;
    --indigo-result: rgb(--indigo, --indigo-houver, --indigo-active);
    --white: #fff;
    --success: #10c469;
    --info: #35b8e0;
    --warning: #f9c851;
    --danger: #ff5b5b;
    --light: #323a46;
    --dark: #1c1f24;
    --white: #f1f5f7;
    --purple: #5b69bc;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: "Roboto",sans-serif;
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  };

  * {
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    color: var(--dark);
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
    background-color: #282e38;
    background: #282e38;
    color: var(--dark);
  }

  h1 {
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
    border-top: 3px solid var(--indigo);
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
    background: var(--indigo-houver);
  }

  li .edit {
    margin-right: 5px;
    color: var(--success);
  }

  li .delete {
    margin-right: 5px;
    color: var(--danger);
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
    border: 2px solid var(--indigo-active);
    margin-top: 20px;
  }

  th, td {
    text-align: center;
    padding: 10px;
  }

  tr:nth-child(even) {
    background-color: var(--indigo-active);
  }
`;

export const Container = Styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
`;
