import PropTypes from "prop-types";

type StudentPropType={
    student:number
}


    export default function StudentIndex({student}:StudentPropType) : React.ReactElement{
        
  
  return (
    
    <>
    
     Index:   {student}  &nbsp; 
    </>
  );
}


StudentIndex.propTypes = {
    student: PropTypes.number
}
