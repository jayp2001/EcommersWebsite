import "./css/cart.css";
import * as React from 'react';
import {useState , useEffect} from 'react';
import CartProductCard from "./component/cartProductCard";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import * as constatnt from '../../constatnt/auth';


function AddCart(){
    const [cartList,setCartList] = useState();

    useEffect(()=>{
        const temp = axios.get(`${constatnt.DB_URL}cart/getCartList`,{withCredentials:true})
        .then(res=> setCartList(res.data))
        console.log("<<<<",cartList);
    },[setCartList])

     if(!cartList){
        return null;
    }

    const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, price) {
  return qty * price;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal() {
  var sum=0;
  cartList.forEach(element => {
        sum += element.quantity*element.price;    
  });
  return sum;
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

// const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * subtotal();
const invoiceTotal = invoiceTaxes + subtotal();
   
    const removeCart = (productId)=>{
        if(window.confirm("are you sure? you want to delete this item")){
                const data ={
                    productId:productId
                }
                const res = axios.post(`${constatnt.DB_URL}cart/deleteCart`,data,{withCredentials:true})
                .then(res=> {setCartList({}); setCartList(res.data)})
                console.log('>>>',cartList)
        }    
    }

    const addQuantity = async(productId) =>{
        const data = {
            productId:productId
        }
        const res = await axios.post(`${constatnt.DB_URL}cart/updateAddquantity`,data,{withCredentials:true})
        .then((res)=>setCartList(res.data));
    }
    const removeQuantity = async(productId,quantity) =>{
        if(quantity === 1){
            if(window.confirm("are you sure? you want to delete this item")){
                // const data ={
                //     productId:productId
                // }
                // const res = axios.post(`${constatnt.DB_URL}cart/deleteCart`,data,{withCredentials:true})
                // .then(res=> setCartList(res.data))
                // console.log('>>>',cartList)
            }
        }
        else {
            const data = {
                productId:productId
            }
            const res = await axios.post(`${constatnt.DB_URL}cart/updateRemovequantity`,data,{withCredentials:true})
            .then((res)=>setCartList(res.data));
        }
       
    }
   

    return(
        <div className="grid grid-cols-12">
                <div className="col-start-1 col-span-7">
                    <div className="grid grid-cols-12 pl-6 mt-10 gap-8">
                            {cartList.map((row,index)=>(
                                <div className="col-span-5">
                                    <CartProductCard product={row} quantity={row.quantity} removeCart={removeCart} addQuantity={addQuantity} removeQuantity={removeQuantity} index={index}/>
                                </div>
                            ))}
                    </div>
                </div> 
                <div className="col-start-8 col-span-5">
                    <div className="grid grid-cols-12">
                        <div className="col-start-2 col-span-10 mt-10 subTotal">
                            <div className="grid grid-cols-12">
                                <div className="col-start-1 col-span-12 info">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 400 }} aria-label="spanning table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell align="center" colSpan={2}>
                                            Details
                                            </TableCell>
                                            <TableCell align="center">Price</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ minWidth: 100}}>Product Name</TableCell>
                                            <TableCell align="right" sx={{ minWidth: 100}}>Qty.</TableCell>
                                            
                                            <TableCell align="center" sx={{ minWidth: 100}}>Sum</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {cartList.map((row) => (
                                            <TableRow key={row.name}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                    
                                            <TableCell align="center">{ccyFormat(row.price * row.quantity)}</TableCell>
                                            </TableRow>
                                        ))}

                                        <TableRow>
                                            <TableCell align="right" colSpan={1}>Subtotal</TableCell>
                                            <TableCell/>
                                            <TableCell align="center">{ccyFormat(subtotal())}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="right">Tax</TableCell>
                                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                            <TableCell align="center">{ccyFormat(invoiceTaxes)}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="right" colSpan={1}>Total</TableCell>
                                            <TableCell />
                                            <TableCell align="center">{ccyFormat(invoiceTotal)}</TableCell>
                                        </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                </div>
                            </div>
                            <div className="grid grid-cols-12">
                                <div className="col-start-2 col-span-10 buy">
                                    <button className="btnBuy">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
   
}

export default AddCart;