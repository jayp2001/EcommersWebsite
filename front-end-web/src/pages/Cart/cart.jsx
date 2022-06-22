import "./css/cart.css";
import * as React from 'react';
import {useState} from 'react';
import CartProductCard from "./component/cartProductCard";

function AddCart(){
    const [data,setData] = useState([
        {
            name:"iphone",
            price:40000
        },
        {
            name:"iphone",
            price:50000
        },
        {
            name:"iphone",
            price:60000
        },
        {
            name:"iphone",
            price:40000
        },
        {
            name:"iphone",
            price:40000
        },
        {
            name:"iphone",
            price:40000
        },
        {
            name:"iphone",
            price:40000
        },
        {
            name:"iphone",
            price:40000
        },
        {
            name:"iphone",
            price:40000
        },
    ]);
    return(
        <div className="grid grid-cols-12">
                <div className="col-start-1 col-span-7">
                    <div className="grid grid-cols-12 pl-6 mt-10 gap-8">
                            {data.map((product,index)=>(
                                <div className="col-span-4">
                                    <CartProductCard product={product}/>
                                </div>
                            ))}
                    </div>
                </div> 
                <div className="col-start-8 col-span-5">
                    <div className="grid grid-cols-12">
                        <div className="col-start-2 col-span-10 mt-10 subTotal">
                            <div className="grid grid-cols-12">
                                <div className="col-start-2 col-span-10 info">
                                    Sub Total Of Product :-<br/><br/>
                                    Total Cost :-
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