import React from 'react';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <AiOutlineHome size={35} />
      </Link>
      <Link to="/user">
        <FaRegUserCircle size={32} />
      </Link>
      <Link to="/setting">
        <FiSettings size={32} />
      </Link>
      <Link to="/login">
        <AiOutlineLogin size={32} />
      </Link>
    </Nav>
  );
}
