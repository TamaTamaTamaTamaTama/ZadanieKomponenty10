import PropTypes from "prop-types";

type StudentPropType={
    student: number
}

    export default function StudentScholarship({student}:StudentPropType) : React.ReactElement{
        
  return (
    
    <>
     Scholarship: {student}  &nbsp; 
    </>
  );
}


StudentScholarship.propTypes = {
    student: PropTypes.number
}
