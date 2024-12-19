import PropTypes from "prop-types";

type StudentPropType={
    student: string
}

    export default function StudentName({student}:StudentPropType) : React.ReactElement{
        
  
  return (
    
    <>
    
     Name: {student}  &nbsp; 
    </>
  );
}

StudentName.propTypes = {
    student: PropTypes.string
}
