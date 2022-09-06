import './css/deskboard.css';
import ProductCard from './component/productCard';
import axios from 'axios';
import * as React from 'react';
import {useEffect,useState} from 'react';
import * as constatnt from '../../constatnt/auth';
function DeskBoard(){
    const [electricProductList,setElectricProductList] = useState();
    useEffect(()=>{
        const res = axios.get(`${constatnt.DB_URL}product/getMaxthreeElectricProductValue`)
        .then(res=> setElectricProductList(res.data.data))
        console.log(res);

    },[setElectricProductList]);
    if(!electricProductList){
        return null;
    }
    return(
        <>
            <div className="grid grid-rows-1">
                <div className="grid grid-cols-12">
                    <div className='col-span-10 col-start-2'>
                        <div className='carousel-card'>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-10 col-start-2 header-wrapper flex justify-between'>
                        <div className='category-header'>
                            Electronics
                        </div>
                        <div className='view-more mt-1'>
                            View More -&gt;
                        </div>
                    </div>
                </div>
                <div className='product-card-wrapper mt-6'>
                    <div className='grid grid-cols-12'>
                       <div className='col-span-10 col-start-2 pb-8'>
                            <div className='grid grid-cols-3 gap-6'>
                            {/* <ProductCard data={electricProductList[0]} type={"electric"}/> */}
                                {
                                    electricProductList.map((data,index)=>(
                                        <ProductCard data={data} type={"electric"}/>
                                    ))
                                }   
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeskBoard;