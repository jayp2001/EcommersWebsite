import './css/deskboard.css';
import ProductCard from './component/productCard';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import * as constatnt from '../../constatnt/auth';
import { Link,NavLink } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img1"
                    src={pic1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img1"
                    src={pic2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img1"
                    src={pic3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img1"
                    src={pic4}
                    alt="Forth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

// export default UncontrolledExample;



function DeskBoard() {
    const [electricProductList, setElectricProductList] = useState();
    useEffect(() => {
        const res = axios.get(`${constatnt.DB_URL}product/getMaxthreeElectricProductValue`)
            .then(res => setElectricProductList(res.data.data))
        console.log(res);

    }, [setElectricProductList]);
    if (!electricProductList) {
        return null;
    }
    return (
        <>
            <div className="grid grid-rows-1">
                <div className="grid grid-cols-12">
                    <div className='col-span-10 col-start-2'>
                        <div className='carousel-card'>
                            <UncontrolledExample />
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
                            <NavLink style={{textDecoration: 'none'}} to="/electric"  className="Electronic">View More -&gt;</NavLink>
                        </div>
                    </div>
                </div>
                <div className='product-card-wrapper mt-6'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-10 col-start-2 pb-8'>
                            <div className='grid grid-cols-3 gap-6'>
                                {/* <ProductCard data={electricProductList[0]} type={"electric"}/> */}
                                {
                                    electricProductList.map((data, index) => (
                                        <ProductCard data={data} type={"electric"} />
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