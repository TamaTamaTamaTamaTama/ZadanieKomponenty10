type StudentPropType={
    student:Date
}


    export default function StudentDate({student}:StudentPropType) : React.ReactElement{
        const formattedDate = student.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
  
  return (
    
    <>
    
     Date of birth:   {formattedDate}  &nbsp; 
    </>
  );
}
