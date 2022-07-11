import '../css/cartProductCard.css';
import axios from 'axios';
import * as constatnt from '../../../constatnt/auth';
import { useState } from 'react';

function CartProductCard({product,removeCart,quantity,addQuantity,removeQuantity,index}){
    
    const [data,setData] = useState(product);
    
    console.log(">>>>",product)
    if(!data){
        return null;
    }
    console.log(">>>>",data)

    return(
        <div className='ProductCard'>
            <div className='product-image'>
                <img src={data.productImage.URL} />
            </div>
            
            <div className='Product-discription'>
            <div className='Adder flex'>
                <div>
                    <button className='btnAdd' onClick={()=>{addQuantity(data._id)}}>+</button>
                </div>
                <div>
                    <input type="text" value={quantity ? quantity :0} className='AdderText'/>
                </div>
                <div>
                    <button className='btnSub' onClick={()=>{removeQuantity(data._id,quantity)}}>-</button>
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