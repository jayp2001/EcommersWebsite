import "../css/adminForm.css";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



function AdminForms() {
    const [data,setData]=useState({
        name:"",
        brandName:"",
        features:"",
        price:0,
        qut:"",
    })

    const [newData,setNewdata]=useState({
        name:"",
        brandName:"",
        features:"",
        price:0,
        qut:"",
    });

    const nameChange = () =>{
        const datatemp = {
        name: document.getElementById('name').value,
        brandName: document.getElementById('brandName').value,
        features: document.getElementById('features').value,
        price: document.getElementById('price').value,
        qut: document.getElementById('qut').value,
        }
        setNewdata(datatemp);
    }
    const resetdata = () =>{    
        setNewdata(data);
    }

    return(
        <>
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8 firest">
                        <div className="Hname">Add Product</div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8 second">
                        <div className="Hname">Product Detail</div>
                        <hr/> 
                    <div className="second-i">
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                     <TextField fullWidth label="Name Of Product" value={newData.name} onChange={nameChange} id="name" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                     <TextField fullWidth label="Name Of Brand" value={newData.brandName} onChange={nameChange} id="brandName" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                     <TextField fullWidth label="Features" id="features" value={newData.features} onChange={nameChange} multiline rows={2} />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                 <TextField fullWidth label="Price Of Product" value={newData.price} onChange={nameChange}  id="price" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                 <TextField fullWidth label="Quantity"  id="qut" value={newData.qut} onChange={nameChange} type="number" InputLabelProps={{shrink: true,}} />
                                </div>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                 <input type="file" value={newData.fupload} />
                                </div>
                            </div>
                        </div> */}
                         <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                    <FormControl sx={{ m: 1, minWidth: 625 }}>
                                        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                                        <Select 
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        label="Status"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>On Stock</MenuItem>
                                        <MenuItem value={2}>Out Of Stock</MenuItem>
                                        <MenuItem value={3}>Empty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                       
                        <div className="grid grid-cols-12">
                            <div className="col-start-4 col-span-3">
                                 <div className="Nop flex justify-between">
                                 <Button variant="contained" color="success">SUBMIT</Button>
                                 <Button variant="contained" color="info" onClick={()=>resetdata()}>RESET</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminForms;