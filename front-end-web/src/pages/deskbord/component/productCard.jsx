import './css/productCard.css';
import productImg from '../../assets/ecommerce.svg'

function ProductCard({data,key}){
    if(!data){
        return null;
    }
    const productData = data;
    console.log(">>>>>><<<<<<<<<",productData)
    return(
        <div className='product-card' key={key}>
            <div className='product-img'>
                <img src={productData.productImage.URL} />
            </div>
            <div className='product-discription'>
                <div className='px-6 py-10'>
                    <div className='product-name'>
                        {productData.name}
                    </div>
                    <div className='product-rate'>
                       <span>₹</span> {productData.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;