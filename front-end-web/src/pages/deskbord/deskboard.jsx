import './css/deskboard.css';
import ProductCard from './component/productCard';
function DeskBoard(){
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

export default DeskBoard;