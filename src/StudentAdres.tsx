import PropTypes from "prop-types";
type StudentPropType={
    student:string
}

    export default function StudentAdres({student}:StudentPropType) : React.ReactElement{
        
  
  return (
    
    <>
    
    Adres:   {student}  &nbsp; 
    </>
  );
}


StudentAdres.propTypes = {
    student: PropTypes.string
}
