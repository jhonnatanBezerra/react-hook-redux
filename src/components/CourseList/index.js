import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {

  const [newCourse, setNewCourse] = useState('')

  //com useSelector nao precisa de connect nem de nada;
  const courses = useSelector(state => state.data);

  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch({ type: 'ADD_COURSE', title: newCourse });
    setNewCourse('');

  }

  return (
    <>
      <ul>
        {courses.map(course =>
          <li key={course}>{course}</li>


        )}

      </ul>
      <input type="text" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} />
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  )
}
