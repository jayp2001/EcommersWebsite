import './css/productList.css'
import ProductCard from '../deskbord/component/productCard'
import TextField from '@mui/material/TextField';
import * as React from 'react';
import {useEffect,useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import axios from 'axios';
import * as constatnt from '../../constatnt/auth';
import { Pagination } from '@mui/material';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';


function ProductListFashion(){

    const [productList,setProductList] = useState();
    const [personName, setPersonName] = React.useState([]);
    const [page, setPage] = useState(1)
    const [totalPage,setTotalPage] = useState(1);
    const theme = useTheme();
    useEffect(()=>{
        const res = axios.get(`${constatnt.DB_URL}product/getAllFashionProduct/${1}/${1}`)
        .then(res=> setProductList(res.data.data))
        console.log(res);

        const temp = axios.get(`${constatnt.DB_URL}product/getNumberofFashionProduct`)
        .then(res=> setTotalPage((res.data % 1) == 0 ? res.data/1 : parseInt(res.data/1)+1))
    },[setProductList]);

    const pagination = async(event, value) =>{
        setPage(value)
        const res = axios.get(`${constatnt.DB_URL}product/getAllFashionProduct/${value}/${1}`)
        .then(res=> setProductList(res.data.data))
        console.log(res);
    }

    if(!productList){
        return null;
    }

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
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];

    function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }
      
        
      
        const handleChange = (event) => {
          const {
            target: { value },
          } = event;
          setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };
    //   function MultipleSelectChip() {
    //     }

    return(
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <div className="grid grid-cols-12">
                        <div className="col-span-10 col-start-3">
                            <div className="filter-card">
                                <div className='flex justify-center'>
                                    <div className='filter-header'>
                                        Filters
                                    </div>
                                </div>
                                <div className='flex justify-center flex-col px-6'>
                                    <div className='flex justify-between mb-10'>
                                        <div className='apply'>
                                            <button>Apply Filter</button>
                                        </div>
                                        <div className='reset'>
                                            <button>
                                                Reset Filter
                                            </button>
                                        </div>
                                    </div>
                                    <div className='filters'>
                                        <Accordion >
                                            <AccordionSummary
                                            sx={{
                                                backgroundColor: "#F1F3F9"
                                              }}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className='bg'
                                            >
                                            <Typography>Cost</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div>
                                                    <TextField 
                                                        label="Min Cost"
                                                        type="number"
                                                        defaultValue={0}
                                                    />
                                                </div>
                                                <div className='my-4 text-xl'>
                                                    To
                                                </div>
                                                <div>
                                                <TextField 
                                                        label="Max Cost"
                                                        type="number"
                                                        defaultValue={1000000}
                                                    />
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                            >
                                            <Typography>Brand</Typography>
                                            </AccordionSummary>

                                            <AccordionDetails>
                                                <div>
                                                    <FormControl sx={{ m: 1, width: "90%" }}>
                                                        <InputLabel id="demo-multiple-chip-label">Brand</InputLabel>
                                                        <Select
                                                        labelId="demo-multiple-chip-label"
                                                        id="demo-multiple-chip"
                                                        multiple
                                                        value={personName}
                                                        onChange={handleChange}
                                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                        renderValue={(selected) => (
                                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                            {selected.map((value) => (
                                                                <Chip key={value} label={value} />
                                                            ))}
                                                            </Box>
                                                        )}
                                                        MenuProps={MenuProps}
                                                        >
                                                        {names.map((name) => (
                                                            <MenuItem
                                                            key={name}
                                                            value={name}
                                                            style={getStyles(name, personName, theme)}
                                                            >
                                                            {name}
                                                            </MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion>
                                            <AccordionSummary
                                            sx={{
                                                backgroundColor: "#F1F3F9"
                                              }}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                            >
                                            <Typography>Disabled Accordion</Typography>
                                            </AccordionSummary>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-9">
                <div className="grid grid-cols-12">
                        <div className="col-span-11 col-start-1 ml-8">
                            <div className="product-wrapper grid grid-cols-3 gap-6 px-10 pt-6">
                                {/* <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard /> */}
                                {productList.map((row,index) =>(
                                    <ProductCard data={row} type={"fashion"} index={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12 col-start-3 m-6'>
                                    <Pagination count={totalPage} color="primary" size='large' defaultPage={page} onChange={pagination} />
                                </div>
                            </div>    
                </div>
            </div>
        </>
    )
}

export default ProductListFashion;