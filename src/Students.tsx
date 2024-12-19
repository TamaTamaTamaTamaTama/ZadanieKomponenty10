import { MouseEventHandler, useState } from 'react';
import Student from './Student';
import { StudentClass, StudentType } from './types/Student';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import StudentName from './StudentName';
import StudentSurname from './StudentSurname'; 
import StudentIndex from './StudentIndex';
import StudentAdres from './StudentAdres';
import StudentDate from './StudentDate';
import StudentGroup from './StudentGroup';
import StudentScholarship from './StudentScholarship';
import StudentMarks from './StudentMarks';
import DeleteStudent from './DeleteStudent';
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function Students() {
  const listTitle = 'Students list';
  const [studentList,updateList]=useState([
    new StudentClass('Ala', 'Makota', 123485, new Date('2000-01-21')),
    new StudentClass('Jan', 'Kowlaski', 2345, new Date('1999-10-23')),
    new StudentClass('Adrian', 'Duda', 156789, new Date('2001-04-01'))
  ]);
  const navigate = useNavigate();
  const [showAddForm,changeValue]=useState(false);
  const [ProperDelete,confirmed]=useState(false);
  const [showEditForm, changeEditVisibility]=useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentClass | null>(null);

  const addNewStudent=(student:StudentClass)=>{
    changeValue(false)
    console.log("add fn invoked")
    let students=[...studentList];
    students.push(student)
    updateList(students)
    navigate(`/`);
  }

  const updateStudent = (updatedStudent: StudentClass): void => {
    
    updateList((prevList) =>
      prevList.map((student) =>
        student.Index_nr === updatedStudent.Index_nr ? updatedStudent : student
      )
    );
  };

   const showform = (targetstudent:StudentClass): void => {
        setSelectedStudent(targetstudent)
        navigate(`/edit/${targetstudent.Index_nr}`);
    };

    const hideEditForm = (): void => {
      changeEditVisibility(false);

    };


    const showconfirmation = (targetstudent:StudentClass): void => {
      setSelectedStudent(targetstudent)
      navigate(`/delete/${targetstudent.Index_nr}`);
    }

    const deletestudent = (id:number): void => {
      updateList((prevStudents) => prevStudents.filter(student => student.Index_nr !== id));
      confirmed(false);
      setSelectedStudent(null);
    }


    const redirecttoadd = (): void => {
      navigate(`/add`);
    }

    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {listTitle}
                {studentList.length > 0 && (
                  <ul>
                    {studentList.map((el) => (
                      <li key={el.Index_nr}>
                        <StudentName student={el.Name} />
                        <StudentSurname student={el.Surname} />
                        <StudentIndex student={el.Index_nr} />
                        <StudentAdres student={el.adres} />
                        <StudentGroup student={el.grupa} />
                        <StudentScholarship student={el.stypendium} />
                        <StudentMarks student={el.marks} />
                        <StudentDate student={el.dataUrodzenia} />
                        <button onClick={() => showform(el)}>Edit student</button>
                        <button onClick={() => showconfirmation(el)}>Delete student</button>
                      </li>
                    ))}
                  </ul>
                )}
                {studentList.length === 0 && <p>No students stored</p>}
                {!showAddForm && (
                  <button onClick={() => redirecttoadd()}>Add student</button>
                )}
              </>
            }
          />
      <Route
          path="add"
          element={<AddStudent addFn={addNewStudent} />}
        />


          <Route
          path="edit/:id"
          element={
          selectedStudent && (
          <EditStudent
          student={selectedStudent}
          updateStudent={updateStudent}
              />
            )
          }
        />
        <Route
          path="delete/:id"
          element={
          selectedStudent && (
          <DeleteStudent
          student={selectedStudent}
          deletestudent={deletestudent}
          />
          )
          }
        />
      </Routes>
    </>
  );
}


















