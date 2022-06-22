import "../css/adminProfile.css";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';


function AdminProfile(){
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0 ,),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    return(
        <>
        <div className="grid grid-cols-12">
            <div className="col-start-2 col-span-10 OutPart">
                <div className="grid grid-cols-12 User-Detail">
                    <div className="col-span-12">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Brand Name</TableCell>
                                <TableCell align="right">price&nbsp;(₹)</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right"><button className="Edit"><EditTwoToneIcon/></button></TableCell>
                                <TableCell align="right"><button className="Delete"><DeleteIcon/></button></TableCell> 
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-12 ">
            <div className="col-start-2 col-span-10 AddProduct">
                <div className="flex justify-around">
                     <div><button className="btnAddProduct">Add Products</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminProfile;