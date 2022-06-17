import './css/productCard.css';
import productImg from '../../assets/ecommerce.svg'

function ProductCard(){
    return(
        <div className='product-card'>
            <div className='product-img'>
                <img src={productImg} />
            </div>
            <div className='product-discription'>

            </div>
        </div>
    )
}

export default ProductCard;