import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="#qunit-tests">
        <AiOutlineHome size={35} />
      </a>
      <a href="#qunit-tests">
        <FaRegUserCircle size={32} style={{ color: '#fff' }} />
      </a>
      <a href="#qunit-tests">
        <FiSettings size={32} style={{ color: '#fff' }} />
      </a>
    </Nav>
  );
}
