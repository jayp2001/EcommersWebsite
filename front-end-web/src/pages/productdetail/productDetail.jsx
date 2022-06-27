import './css/productDetail.css';
import img from '../assets/ecommerce.svg'
import TextField from '@mui/material/TextField';
import {useParams} from "react-router-dom";
import React from 'react';
function ProductDetail(){
    const param = useParams();
    console.log(">>>>",param);
    return(
        <>
        <div className="grid grid-cols-12 gap-12 mt-20 pb-10">
            <div className="col-span-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-11 col-start-2">
                        <div className="img-card p-6">
                            <img src={img} style={{height:"100%" , width:"100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-7">
                <div className='grid grid-cols-12'>
                    <div className='col-span-11'>
                        <div className='product-header-wrapper'>
                            <div className='category-header'>
                                Iphone 13
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-8 mb-7'>
                    <div className='col-span-11'>
                        <div className='product-detail'>

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
                                        InputLabelProps={{
                                            shrink: true,
                                    }}
                                    />
                                </div>
                                <div className='col-span-6'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <button className='add-btn'>+</button>
                                        </div>
                                        <div>
                                            <button className='minus-btn'>-</button>
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