

import { useState } from 'react';
import { StudentClass } from './types/Student';

type StudentStateType={
    new_student:StudentClass;
   
}

type StudentPropsType={
 
  addFn:(new_student:StudentClass)=>void;
}

//export default function Student({student}:{student: StudentClass}) {
    export default function AddStudent(props:StudentPropsType) : React.ReactElement{
      const [new_student, changeStudentData]=useState({
        name: '', surname: '', index_nr: 0, dataUrodzenia: new Date(), adres: '', grupa: '', stypendium: 0,
        marks: []
      });

      const changeValue=(e:React.FormEvent<HTMLInputElement>):void =>{
          const value=e.currentTarget.value;
          const name=e.currentTarget.name;
          let student=new_student;
          switch(name){
            case 'name':student.name=value;break;
            case 'surname':student.surname=value;break;
            case 'index':student.index_nr= parseInt(value, 10);
          }
          changeStudentData(student);
      }
        
      const addStudent=():void=>{
        const student=new StudentClass(new_student.name,new_student.surname,new_student.index_nr,new_student.dataUrodzenia);
          props.addFn(student);
      }
  
  return (
    
    <>
    <div>
        Name: <input type='text' name="name" onChange={(e)=>changeValue(e)}/>
        Surname: <input type='text' name="surname" onChange={(e)=>changeValue(e)}/>
        Index: <input type='number' name="index" onChange={(e)=>changeValue(e)}/>
        Date of birth: <input type='date' name="birthdate" onChange={(e)=>changeValue(e)}/>
        <button onClick={()=>addStudent()}>Add</button>
      </div>
        
    </>
  );
}
