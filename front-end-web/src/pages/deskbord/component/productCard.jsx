import './css/productCard.css';
import productImg from '../../assets/ecommerce.svg'

function ProductCard(){
    return(
        <div className='product-card'>
            <div className='product-img'>
                <img src={productImg} />
            </div>
            <div className='product-discription'>
                <div className='px-6 py-10 flex justify-between'>
                    <div className='product-name'>
                        Iphone 13
                    </div>
                    <div className='product-rate'>
                        $ 1300
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;