import '../css/cartProductCard.css';
import axios from 'axios';
import * as constatnt from '../../../constatnt/auth';
import { useState } from 'react';

function CartProductCard({product,removeCart,index}){
    
    const [data,setData] = useState(product);
    
    console.log(">>>>",product)
    if(!data){
        return null;
    }
    console.log(">>>>",data)

    const addQuantity = async(productId) =>{
        const data = {
            productId:productId
        }
        const res = await axios.post(`${constatnt.DB_URL}cart/updateAddquantity`,data,{withCredentials:true})
        .then((res)=>setData((prevState)=>({
            ...prevState,
            quantity:res.data
        })));
    }
    const removeQuantity = async(productId) =>{
        const data = {
            productId:productId
        }
        const res = await axios.post(`${constatnt.DB_URL}cart/updateRemovequantity`,data,{withCredentials:true})
        .then((res)=>setData((prevState)=>({
            ...prevState,
            quantity:res.data
        })));
    }
    
    
    return(
        <div className='ProductCard'>
            <div className='product-image'>
                <img src={data.productImage.URL} />
            </div>
            
            <div className='Product-discription'>
            <div className='Adder flex'>
                <div>
                    <button className='btnAdd' onClick={()=>addQuantity(data._id)}>+</button>
                </div>
                <div>
                    <input type="text" value={data.quantity} className='AdderText'/>
                </div>
                <div>
                    <button className='btnSub' onClick={()=>removeQuantity(data._id)}>-</button>
                </div>
            </div>
                <div className='px-6 py-6 flex justify-between'>
                    <div className='product-name'>
                        {data.name}
                    </div>
                    <div className='product-rate'>
                        {data.price}
                    </div>
                </div>
                <div className='removeCart flex justify-center'>
                    <button className='btnCart' onClick={()=>removeCart(data._id)}>
                        Remove Item
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard;