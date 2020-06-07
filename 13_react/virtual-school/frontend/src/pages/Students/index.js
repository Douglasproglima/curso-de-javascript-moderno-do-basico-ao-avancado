import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { StudentContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading , setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response =  await axios.get('/students');
      setStudents(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>

      <Loading isLoading={isLoading} />
      <h2>Alunos</h2>
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
