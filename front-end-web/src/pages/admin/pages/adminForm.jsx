import "../css/adminForm.css";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState,useEffect} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import * as constatnt from '../../../constatnt/auth';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom';


function AdminForms() {

    const theme = useTheme();
    let navigate = useNavigate();
    useEffect(()=>{
        const res = axios.get(`${constatnt.DB_URL}auth/myRights`,{ withCredentials: true })
        .then((res)=>{
            if(res.data === process.env.REACT_APP_CLIENT){
                console.log(">>>",res)
                navigate('/deskBoard')
            }
            else if(res.data === process.env.REACT_APP_ERROR){
                navigate('/')
                console.log(">>>",res)
            }
            else{
                console.log(">>>",res)
            }
        })
        // console.log(process.env.REACT_APP_ADMIN);
    },[])

    const [categoryTypeOfFashionProduct, setCategoryTypeOfFashionProduct] = useState([
        "Men's wear",
        "Women's wear"
    ])

    const [categoryTypeOfElectricProduct, setCategoryTypeOfElectricProduct] = useState([
        "Mobile",
        "Laptop",
        "Accessories"
    ])
    // console.log(process.env.REACT_APP_ADMIN);
    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setFormdata((prevState) => ({
            ...prevState,
          size: typeof value === 'string' ? value.split(',') : value,
        }))
        // setPersonName(
        // // On autofill we get a stringified value.
        // // typeof value === 'string' ? value.split(',') : value,
        // );
    };

    const [category,setCategory] = useState("Electric");

    const [formdata,setFormdata] = useState({
        name : '',
        brandName : '',
        feature : '',
        discription : '',
        status : '',
        type : '',
        price : 0,
        quantity : 0,
        size:[]
    })

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    const names = [
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL',
    'Miriam Wagner',
    ];


    function getStyles(name, size, theme) {
    return {
        fontWeight:
        size.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
    }


    const onchange = (e) => {
        setFormdata((prevState) => ({
            ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const changeCategory = (e) => {
        setCategory(e.target.value);
    }

    const submitAddProduct = async (e)=>{
        e.preventDefault();
        console.log(">>>>>",formdata)
        if(category === "Electric"){
            const electicProduct = {
                name : formdata.name,
                brandName : formdata.brandName,
                feature : formdata.feature,
                discription : formdata.discription,
                status : formdata.status,
                type : formdata.type,
                price : formdata.price,
                quantity : formdata.quantity,
            }
            console.log(">>>>>",formdata)
            const res = await axios.post(`${constatnt.DB_URL}product/addElectricProduct`, electicProduct);
        }
        else{
            const fashionProduct = {
                name : formdata.name,
                brandName : formdata.brandName,
                discription : formdata.discription,
                status : formdata.status,
                type : formdata.type,
                price : formdata.price,
                quantity : formdata.quantity,
                size:formdata.size
            }
            console.log(">>>>>",formdata)
            const res = await axios.post(`${constatnt.DB_URL}product/addFashionProduct`, fashionProduct);
        }
        

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
                                     <TextField fullWidth label="Name Of Product" name="name" value={formdata.name} onChange={onchange} id="name" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                     <TextField fullWidth label="Name Of Brand" name="brandName" value={formdata.brandName} onChange={onchange} id="brandName" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                    <FormControl sx={{ m: 1, minWidth: 625 }}>
                                        <InputLabel id="demo-controlled-open-select-label">Product Category</InputLabel>
                                        <Select 
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        label="Product Category"
                                        value={category}
                                        name="category"
                                        onChange={changeCategory}
                                        >
                                        {/* <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem> */}
                                        <MenuItem value="Electric">Electric</MenuItem>
                                        <MenuItem value="Fashion">Fashion</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>

                        {category === 'Fashion' ? 
                        <>
                            <div className="grid grid-cols-12">
                                <div className="col-start-3 col-span-8">
                                    <div className="Nop">
                                    <FormControl sx={{ m: 1, width: 630 }}>
                                        <InputLabel id="demo-multiple-name-label">Size</InputLabel>
                                        <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={formdata.size}
                                        name="size"
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Size" />}
                                        MenuProps={MenuProps}
                                        >
                                        {names.map((name) => (
                                            <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, formdata.size, theme)}
                                            >
                                            {name}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                    </div>
                                </div>
                            </div>
                         </>
                            :
                            null 
                    }

                    {category === 'Electric' ? 
                    

                    <div className="grid grid-cols-12">
                    <div className="col-start-3 col-span-8">
                         <div className="Nop">
                             <TextField fullWidth label="Features" id="feature" name="feature" value={formdata.feature} onChange={onchange} multiline rows={2} />
                        </div>
                    </div>
                </div>
                :
                null
                }

                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                     <TextField fullWidth label="discription" name="discription" id="discription" value={formdata.discription} onChange={onchange} multiline rows={2} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                 <TextField fullWidth label="Price Of Product" name="price" value={formdata.price} onChange={onchange}  id="price" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                 <TextField fullWidth label="Quantity" name="quantity"  id="quantity" value={formdata.quantity} onChange={onchange} type="number" InputLabelProps={{shrink: true,}} />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-start-3 col-span-8">
                                 <div className="Nop">
                                    <FormControl sx={{ m: 1, minWidth: 625 }}>
                                        <InputLabel id="demo-controlled-open-select-label">Type of Product</InputLabel>
                                        <Select 
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        label="Type Of Product"
                                        value={formdata.type}
                                        name="type"
                                        onChange={onchange}
                                        >
                                        {category === "Fashion"? categoryTypeOfFashionProduct.map((name) => (
                                            <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, formdata.size, theme)}
                                            >
                                            {name}
                                            </MenuItem>
                                        )):
                                        categoryTypeOfElectricProduct.map((name) => (
                                            <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, formdata.size, theme)}
                                            >
                                            {name}
                                            </MenuItem>
                                        ))
                                    }
                                        </Select>
                                    </FormControl>
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
                                        value={formdata.status}
                                        name="status"
                                        onChange={onchange}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="On Stock">On Stock</MenuItem>
                                        <MenuItem value="Out Of Stock">Out Of Stock</MenuItem>
                                        <MenuItem value="Empty">Empty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                       
                        <div className="grid grid-cols-12">
                            <div className="col-start-4 col-span-3">
                                 <div className="Nop flex justify-between">
                                 <Button variant="contained" color="success" onClick={submitAddProduct}>SUBMIT</Button>
                                 <Button variant="contained" color="info">RESET</Button>
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