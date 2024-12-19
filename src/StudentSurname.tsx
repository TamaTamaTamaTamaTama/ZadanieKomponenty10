import PropTypes from "prop-types";

type StudentPropType={
    student: string
}

    export default function StudentSurname({student}:StudentPropType) : React.ReactElement{
        
  
  return (
    
    <>
     Surname: {student}  &nbsp; 
    </>
  );
}


StudentSurname.propTypes = {
    student: PropTypes.string
}

