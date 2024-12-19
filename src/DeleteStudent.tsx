import { parse } from 'path';
import { StudentClass} from './types/Student';
import { useNavigate} from 'react-router-dom';



type StudentPropsType={
    student:StudentClass;
    deletestudent: (id: number) => void;
  }


export default function DeleteStudent({student, deletestudent}: StudentPropsType): React.ReactElement  {
    const navigate = useNavigate();
  
      const canceldeletion = () => {
        navigate('/'); 
      };

      const handledeletion = (index: number) => {
        deletestudent(index);
        navigate('/');
      }

    return (
    <><p>Are you sure you want to delete {student.Name} {student.Surname}
    </p>
    <button onClick={()=>handledeletion(student.Index_nr)}>Yes</button>
    <button onClick={()=> canceldeletion()}>No</button>
    
    </>
    );
}