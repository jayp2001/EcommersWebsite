import '../css/cartProductCard.css';
import productImg from '../../assets/ecommerce.svg'

function CartProductCard({product}){
    let data = product;
    if(!data){
        return null;
    }
    return(
        <div className='product-card'>
            <div className='product-img'>
                <img src={productImg} />
            </div>
            <div className='product-discription'>
                <div className='px-6 py-10 flex justify-between'>
                    <div className='product-name'>
                        {data.name}
                    </div>
                    <div className='product-rate'>
                        {data.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard;