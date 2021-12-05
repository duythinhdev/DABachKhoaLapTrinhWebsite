import React,{useState} from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const usePasswordToggle = () => {
    const [visible,setVisible] = useState(false);


    const Icon =  visible ? <VisibilityOffIcon  onClick={()=>setVisible(!visible)}  /> : <VisibilityIcon onClick={()=>setVisible(!visible)} />;
    
    const InputType = visible ? "text" : "password";

    return [InputType,Icon]
}

export default usePasswordToggle;
