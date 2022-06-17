import './css/productList.css'
import ProductCard from '../deskbord/component/productCard'
function ProductList(){
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
                                    <div className='filter-wrapper'>

                                    </div>
                                    <div className='filter-wrapper'>

                                    </div>
                                    <div className='filter-wrapper'>

                                    </div>
                                    <div className='filter-wrapper'>

                                    </div>
                                    <div className='filter-wrapper'>

                                    </div>
                                    <div className='filter-wrapper'>

                                    </div>
                                    <div className='filter-wrapper'>

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
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList