import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { StudentContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData() {
      const response =  await axios.get('/students');
      console.log(response.data)
      setStudents(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h2>Students</h2>
      <hr></hr>

      <StudentContainer>
        {students.map(student => (
          <div key={String(student.id)}>
            <ProfilePicture>
              {get(student, 'Photos[0].url', false) ? (
                <img src={student.Photos[0].url} alt=""></img>
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{student.name}</span>
            <span>{student.email}</span>

            <Link to={`/student/${student.id}/edit`}>
              <FaEdit size={18} color='#4fc3f7' />
            </Link>

            <Link to={`/student/${student.id}/delete`}>
              <FaWindowClose size={18} color='#ff6e40' />
            </Link>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
