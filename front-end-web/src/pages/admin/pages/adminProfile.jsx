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
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TextField } from "@mui/material";
import {useNavigate} from 'react-router-dom'


function AdminProfile(){
    let navigate = useNavigate();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Electric ProductList

    const [ElectricproductList,setElectricproductList] = useState();
    const [FashionproductList,setFashionproductList] = useState();
    useEffect(()=>{

        const res = axios.get(`${constatnt.DB_URL}product/getElectricProduct`)
        .then(res=> setElectricproductList(res.data))
        
        const fashion = axios.get(`${constatnt.DB_URL}product/getFashionProduct`)
        .then(res=> setFashionproductList(res.data))

    },[setElectricproductList],[setFashionproductList])
    if(!ElectricproductList || !FashionproductList){
        return null
    }

    // function deleteData(()=>{
    //     return null
    // },[setElectricproductList])

    const deleteData = (e,imgId)=>{
        if(window.confirm("are you sure? you want to delete this item")){
               console.log(ElectricproductList)
                const data ={
                    imgId:imgId
                }
                const res = axios.delete(`${constatnt.DB_URL}product/deleteElectricProduct/${e}`,{data})
                .then(res=> setElectricproductList(res.data))
                console.log(ElectricproductList);
        }    
    }

    const deleteFashionProduct =(e,imgId)=>{
        if(window.confirm("are you sure? you want to delete this item")){
            console.log(FashionproductList)
            const data = {
                imgId:imgId
            }
            const res = axios.delete(`${constatnt.DB_URL}product/deleteFashionProduct/${e}`,{data})
            .then(res=> setFashionproductList(res.data))
            console.log(FashionproductList);
       }
    }

    const editFashion = (id) =>{
        navigate(`/admin/editProduct/${id}/Fashion`)
    }

    const editElectric = (id) =>{
        navigate(`/admin/editProduct/${id}/Electric`)
    }

    return(
        <>
        <div className="grid grid-cols-12">
            <div className="col-start-2 col-span-10 OutPart">
                <div className="grid grid-cols-12 User-Detail">
                    <div className="col-span-12">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <div className="flex justify-between">
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Electronic" value="1" />
                        <Tab label="Fashion" value="2" />
                    </TabList>
                    <div className="SearchBar">
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            placeholder="Search"
                            className="text"
                            variant="standard"
                            size="small"
                        />
                            <button className="Button ml-6 btnSearch">Search</button>
                        </div>
                    <button className="btnAddProduct" onClick={()=> navigate('/admin/addProduct')}>Add Products</button>
                    </div>
                 </Box>
        <TabPanel value="1">
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
                            {ElectricproductList.map((row,index) => (
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
                                <TableCell align="right"><button className="Edit" onClick={()=>editElectric(row._id)}><EditTwoToneIcon/></button></TableCell>
                                <TableCell align="right"><button className="Delete" onClick={()=>deleteData(row._id,row.productImage.id)}><DeleteIcon/></button></TableCell> 
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
        </TabPanel>
        <TabPanel value="2">
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
                            {FashionproductList.map((row,index) => (
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
                                <TableCell align="right"><button className="Edit" onClick={()=>editFashion(row._id)}><EditTwoToneIcon/></button></TableCell>
                                <TableCell align="right"><button className="Delete" onClick={()=>deleteFashionProduct(row._id,row.productImage.id)}><DeleteIcon/></button></TableCell> 
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
        </TabPanel>
      </TabContext>
    </Box>
                    </div>
                </div>
            </div>
        </div>            
        </>
    )
}

export default AdminProfile;