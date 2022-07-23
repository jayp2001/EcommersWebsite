import './css/productCard.css';
import productImg from '../../assets/ecommerce.svg'
import { useNavigate} from 'react-router-dom';

function ProductCard({data,index,type}){
    let navigate = useNavigate();
    if(!data){
        return null;
    }
    const goToInfo = (id)=>{
        console.log(id)
        navigate(`/product/${id}/${type}`);
    }
    const productData = data;
    return(
        <div className='product-card' onClick={()=>goToInfo(data._id)} key={data._id}>
            <div className='product-img grid grid-cols-1 content-center'>
                <div className='flex justify-center' style={{width:"100%"}}>
                    <div>
                        <img src={productData.productImage.URL} />
                    </div>
                </div>
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