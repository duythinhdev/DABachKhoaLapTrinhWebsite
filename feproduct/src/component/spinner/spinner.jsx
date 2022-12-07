// import React from 'react';
// import "./spinner.scss";
import {CircularProgress} from '@mui/material';
import styled from 'styled-components';

// function Spinner() {
//     return ( <
//         div className = "sk-folding-cube" >
//             <div className = "sk-cube1 sk-cube" > </div> 
//             <div className = "sk-cube2 sk-cube" > </div> 
//             <div className = "sk-cube4 sk-cube" > </div> 
//             <div className = "sk-cube3 sk-cube" > </div> 
//         </div> 
//     );
// }

// export default Spinner;
export const Spinner = styled(CircularProgress)`
  color: #d61b22;
`;