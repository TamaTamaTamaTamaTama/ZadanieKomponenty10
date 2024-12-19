type StudentPropType={
    student: number[]
}

    export default function StudentMarks({student}:StudentPropType) : React.ReactElement{
        
  
  return (
    
    <>  
     Marks: {student}  &nbsp; 
    </>
  );
}
