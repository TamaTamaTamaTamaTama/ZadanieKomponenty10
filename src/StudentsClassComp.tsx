

import React from 'react';
import Student from './Student';
import { StudentClass, StudentType } from './types/Student';

type MyProps={

}

type MyState={
  listTitle:string;
  studentList:StudentClass[];
  addFormVisible:boolean;
  newStudent:StudentType;
}
export default class Students extends React.Component<MyProps,MyState> {

  constructor(props: {}){
    super(props);
    this.state={
      listTitle: 'Students list',
      studentList: [
        new StudentClass('Ala', 'Makota', 123485, new Date('2000-01-21')),
        new StudentClass('Jan', 'Kowlaski', 2345, new Date('1999-10-23')),
        new StudentClass('Adrian', 'Duda', 156789, new Date('2001-04-01'))
      ],
      newStudent:{
        name: '', surname: '', index_nr: 0, dataUrodzenia: new Date(), adres: '', grupa: '', stypendium: 0,
        marks: []
      },
      addFormVisible:false
    }
    
  }
  
  showForm(){
    this.setState({addFormVisible:true});
  }

  changeName(e:React.FormEvent<HTMLInputElement>){
    const value=e.currentTarget.value;
    this.setState(prevState=>{
      let newStudent=prevState.newStudent;
      newStudent.name=value;
      return {newStudent:newStudent};
    })
  }

  changeSurname(e:React.FormEvent<HTMLInputElement>){
    const value=e.currentTarget.value;
    this.setState(prevState=>{
      let newStudent=prevState.newStudent;
      newStudent.surname=value;
      return {newStudent:newStudent};
    })
  }

  changeIndex(e:React.FormEvent<HTMLInputElement>){
    const value=e.currentTarget.value;
    this.setState(prevState=>{
      let newStudent=prevState.newStudent;
      newStudent.index_nr=Number.parseInt(value);
      return {newStudent:newStudent};
    })
  }

  changeDate(e:React.FormEvent<HTMLInputElement>){
    const value=e.currentTarget.value;
    this.setState(prevState=>{
      let newStudent=prevState.newStudent;
      newStudent.dataUrodzenia=new Date(value);
      return {newStudent};
    })
  }

  addStudent(){
    this.setState(prevState=>{
      let students=prevState.studentList;
      const {name,surname,index_nr, dataUrodzenia}=prevState.newStudent;
      students.push(new StudentClass(name,surname,index_nr,dataUrodzenia));
      return {studentList:students,addFormVisible:false};
    })

  }
  
  render (){
    const {listTitle,studentList,addFormVisible}=this.state;
      return(
    <>
      {listTitle}
      {studentList.length>0 &&
      <ul>
      {studentList.map((el) => {return <li><Student student={el}/></li>
})}

      </ul>}
      {studentList.length===0 && <p>No students stored</p>}
      <button onClick={()=>this.showForm()}>Add new student</button>
      {addFormVisible&& 
      <div>
        Name: <input type='text' name="name" onChange={(e)=>this.changeName(e)}/>
        Surname: <input type='text' name="surname" onChange={(e)=>this.changeSurname(e)}/>
        Index: <input type='number' name="index" onChange={(e)=>this.changeIndex(e)}/>
        Date of birth: <input type='date' name="birthdate" onChange={(e)=>this.changeDate(e)}/>
        <button onClick={()=>this.addStudent()}>Add</button>
      </div>
  }
    </>
    )
  }
}
