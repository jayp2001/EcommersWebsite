import "../css/adminProfile.css";
import * as React from 'react';
import {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import * as constatnt from '../../../constatnt/auth';


function AdminProfile(){
    const [productList,setProductList] = useState();
    useEffect(()=>{
        const res = axios.get(`${constatnt.DB_URL}product/getElectricProduct`)
        .then(res=> setProductList(res.data))
        
        // if(res.data)
            // setProductList(res.data)
    },[setProductList])
    if(!productList){
        return null
    }

    // function deleteData(()=>{
    //     return null
    // },[setProductList])

    const deleteData = (e)=>{
        console.log(productList)
        // const id = e
        const res = axios.delete(`${constatnt.DB_URL}product/deleteElectricProduct/${e}`)
        .then(res=> setProductList(res.data))
        console.log(productList);
        
    }

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
                            {productList.map((row,index) => (
                                <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.brandName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right"><button className="Edit"><EditTwoToneIcon/></button></TableCell>
                                <TableCell align="right"><button className="Delete" onClick={()=>deleteData(row._id)}><DeleteIcon/></button></TableCell> 
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