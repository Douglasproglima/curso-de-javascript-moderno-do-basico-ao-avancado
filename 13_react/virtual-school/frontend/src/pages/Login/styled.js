import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ContainerLogin = styled.p`
  body {
      margin: 0;
      color: #6a6f8c;
      /* background: #000000d2; */
      font: 600 16px/18px 'Open Sans', sans-serif;
      box-shadow: 0 12px 15px 0 rgba(56, 30, 202, 0.37), 0 17px 50px 0 rgba(0, 0, 0, .19);
      background: url(https://raw.githubusercontent.com/douglasproglima/images/master/backgroud-login.jpg) center;
  }

  *,
  :after,
  :before {
      box-sizing: border-box
  }

  .clearfix:after,
  .clearfix:before {
      content: '';
      display: table
  }

  .clearfix:after {
      clear: both;
      display: block
  }

  a {
      color: #000;
      text-decoration: dashed
  }

  a :houver {
      color: #b317a68e;
  }

  .login-wrap {
      width: 100%;
      margin: auto;
      max-width: 525px;
      min-height: 670px;
      position: relative;
      /* background: url(https://raw.githubusercontent.com/douglasproglima/images/master/backgroud.png) no-repeat center; */
      box-shadow: 0 12px 15px 0 rgba(56, 30, 202, 0.37), 0 17px 50px 0 rgba(0, 0, 0, .19);
  }

  .login-html {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 90px 70px 50px 70px;
      /* background: rgb(105, 173, 246); */
      /* background: rgba(102, 34, 228, 0.185); */
  }

  .login-html .sign-in-htm,
  .login-html .sign-up-htm {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      transition: all .4s linear;
  }

  .login-html .sign-in,
  .login-html .sign-up,
  .login-form .group .check{
      display:none;
  }

  .login-html .tab,
  .login-form .group .label,
  .login-form .group .button {
      text-transform: uppercase;
  }

  .login-html .tab {
      font-size: 22px;
      margin-right: 15px;
      padding-bottom: 5px;
      margin: 0 15px 10px 0;
      display: inline-block;
      border-bottom: 2px solid transparent;
      color: #b317a6;
  }

  .login-html .sign-in:checked+.tab,
  .login-html .sign-up:checked+.tab {
      color: #fff;
      border-color: #ffffff98;
      border: black;
      border-radius: 0;
      padding: 14px;
      background: #b317a6;
  }

  .login-form {
      min-height: 345px;
      position: relative;
      perspective: 1000px;
      transform-style: preserve-3d;
  }

  .login-form .group {
      margin-bottom: 15px;
  }

  .login-form .group .label,
  .login-form .group .input,
  .login-form .group .button {
      width: 100%;
      color: rgb(12, 12, 12);
      display: block;
  }

  .login-form .group .input,
  .login-form .group .button {
      border: none;
      padding: 15px 20px;
      border-radius: 25px;
      background: rgb(255, 255, 255);
  }

  .login-form .group input[data-type="password"] {
      text-security: circle;
      -webkit-text-security: circle;
  }

  .login-form .group .label {
      color: #000;
      font-size: 13px;
  }

  .login-form .group .button {
      background: #b317a6;
      font-weight: bold;
  }

  .login-form .group label .icon {
      width: 15px;
      height: 15px;
      border-radius: 2px;
      position: relative;
      display: inline-block;
      background: rgba(255, 255, 255, .1);
  }

  .login-form .group label .icon:before,
  .login-form .group label .icon:after {
      content: '';
      width: 10px;
      height: 2px;
      background: #fff;
      position: absolute;
      transition: all .2s ease-in-out 0s;
  }

  .login-form .group label .icon:before {
      left: 3px;
      width: 5px;
      bottom: 6px;
      transform: scale(0) rotate(0);
  }

  .login-form .group label .icon:after {
      top: 6px;
      right: 0;
      transform: scale(0) rotate(0);
  }

  .login-form .group .check:checked+label {
      color: #fff;
  }

  .login-form .group .check:checked+label .icon {
      background: #b317a6;
  }

  .login-form .group .check:checked+label .icon:before {
      transform: scale(1) rotate(45deg);
  }

  .login-form .group .check:checked+label .icon:after {
      transform: scale(1) rotate(-45deg);
  }

  .login-html .sign-in:checked+.tab+.sign-up+.tab+.login-form .sign-in-htm {
      transform: rotate(0);
  }

  .login-html .sign-up:checked+.tab+.login-form .sign-up-htm {
      transform: rotate(0);
  }

  .isAccount {
      color: #b317a6;
  }

  .hr {
      height: 2px;
      margin: 60px 0 50px 0;
      background: #b317a6b7;
  }

  .foot-lnk {
      text-align: center;
  }
`;
