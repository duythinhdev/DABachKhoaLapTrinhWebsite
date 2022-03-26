import React from 'react';
import "./ModalComment.scss";
import CloseIcon from '@mui/icons-material/Close';

interface propsComment { 
    clickHideContentComment: ()=> void;
}
const ModalComment:React.FC<propsComment> = ({clickHideContentComment}) => {
    return (
        <div className="ContainerModalComment">
            <div className="close">
             <CloseIcon onClick={clickHideContentComment} />
            </div>
        </div>
    );
}

export default ModalComment;