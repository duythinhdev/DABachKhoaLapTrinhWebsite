import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useColorTable from "../../hook/useColorTable";

const style: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

interface datapProductDetail {
    hideModalPd: ()=> void,
    showModalPD: boolean
}
const  ModalProductDetail: React.FC<datapProductDetail> = ({hideModalPd,showModalPD})  => {
  let { rowAlternateColors } =   useColorTable('tr');
  useEffect(() => {
    rowAlternateColors();
  },[])
    return (
        <div>
        <Modal
          open={showModalPD}
          onClose={hideModalPd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <table>
              <tbody>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Tên sản phẩm </td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                        <tr>
                            <td>Hãng sản xuất</td> 
                            <td>Laptop Asus</td>
                        </tr>
                       
                </tbody>
            </table>
          </Box>
        </Modal>
      </div>
    );
}

export default ModalProductDetail;