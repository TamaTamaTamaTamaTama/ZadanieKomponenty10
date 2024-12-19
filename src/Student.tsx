import { StudentClass } from './types/Student';

type StudentPropType={
    student:StudentClass
}



//export default function Student({student}:{student: StudentClass}) {
    export default function Student({student}:StudentPropType) : React.ReactElement{
        
  
  return (
    
    <>
    
    {student.Name}  {student.Surname}  
    </>
  );
}
