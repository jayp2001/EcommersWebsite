import './css/productDetail.css';
import img from '../assets/ecommerce.svg'
import TextField from '@mui/material/TextField';
import { useEffect,useState } from 'react';
import {useParams } from "react-router-dom";
import * as constatnt from '../../constatnt/auth';
import axios from 'axios';

import React from 'react';
function ProductDetail(){
    const [productData,setProductData] = useState();
    const [quantity,setQuantity] = useState(1);
    const param = useParams().id;
    const type = useParams().type;

    useEffect(()=>{
        if(type === 'electric' && param){
            const res = axios.get(`${constatnt.DB_URL}product/getElectricProduct/${param}`)
            .then(res=> setProductData(res.data))
        }
        else if (type === 'fashion' && param) {
            const res = axios.get(`${constatnt.DB_URL}product/getFashionProduct/${param}`)
            .then(res=> setProductData(res.data))
        }
    },[]);
    if(!productData){
        return null;
    }
    console.log(">>>>",param);
    return(
        <>
        <div className="grid grid-cols-12 gap-12 mt-20 pb-10">
            <div className="col-span-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-11 col-start-2">
                        <div className="img-card p-6">
                            <img src={productData.productImage.URL} style={{height:"100%" , width:"100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-7">
                <div className='grid grid-cols-12'>
                    <div className='col-span-11'>
                        <div className='product-header-wrapper'>
                            <div className='category-header'>
                                {productData.name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-8 mb-7'>
                    <div className='col-span-11'>
                        <div className='product-detail'>
                            {productData.discription}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-11'>
                        <div className='product-add-wrapper'>
                            <div className='grid grid-cols-12 px-6 py-4'>
                                <div className='col-span-6'>
                                    <TextField
                                        id="outlined-number"
                                        defaultValue={1}
                                        label="quantity"
                                        type="number"
                                        value={quantity}
                                        InputLabelProps={{
                                            shrink: true,
                                    }}
                                    />
                                </div>
                                <div className='col-span-6'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <button className='add-btn' onClick={()=>setQuantity(quantity < productData.quantity ? quantity+1 : quantity)}>+</button>
                                        </div>
                                        <div>
                                            <button className='minus-btn' onClick={()=>setQuantity(quantity > 1 ? quantity-1 : 1)}>-</button>
                                        </div>
                                        <div>
                                            <button className='add-to-cart-btn'>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail;