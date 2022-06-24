import '../css/cartProductCard.css';
import productImg from '../../assets/ecommerce.svg'

function CartProductCard({product}){
    let data = product;
    if(!data){
        return null;
    }
    return(
        <div className='ProductCard'>
            <div className='product-image'>
                <img src={productImg} />
            </div>
            
            <div className='Product-discription'>
            <div className='Adder flex'>
                <div>
                    <button className='btnAdd'>+</button>
                </div>
                <div>
                    <input type="text" className='AdderText'/>
                </div>
                <div>
                    <button className='btnSub'>-</button>
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
                    <button className='btnCart'>
                        Remove Item
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard;