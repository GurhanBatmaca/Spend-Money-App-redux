import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../redux/slices/productSlice';

const Products = () => {
    const products = useSelector(state => state.product);
    const total_money = useSelector(state => state.money.total_money);
    const dispatch = useDispatch();

    const handInput = (e) => {
        if(e !== NaN  || e > 0) {
            console.log("nan");
        } else {
            console.log("doğru");
        }
        
    }

  return (
    <div className='row products mb-3'>
        <h1 className='p-4 bg-success sticky-sm-top text-center'>{total_money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₺</h1>
        {
            products.map((product,index) => (
                <div className='col-md-4' key={index}>
                    <div className='p-3'>
                        <div className='product bg-white'>
                            <div className='product-img p-2'><img src={`${product.img}`}/></div>
                            <div className='text-center'>{product.name}</div>
                            <div className='text-center'>{(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₺</div>
                        </div>
                        <div className='p-3 bg-white'>
                            <div className='inputs row'>
                                <button 
                                    disabled={ product.count > 0 ? false : true} 
                                    className={`btn btn-danger col-3`} onClick={() => {dispatch(decrement({price:product.price,name: product.name}))}}>
                                    Sell
                                </button>
                                <input
                                    onChange={(e) => {if(e.target.value !== NaN  && e.target.value > 0) {{dispatch(increment({price:(product.price *e.target.value) ,name: product.name}))}}}}

                                    disabled={total_money > product.price ? false : true}
                                    value={product.count} 
                                    className='text-center col-6'  
                                    type={"text"}>                               
                                </input>
                                <button
                                    disabled={total_money > product.price ? false : true} 
                                    className={`btn btn-success col-3`} onClick={() => {dispatch(increment({price:product.price,name: product.name}))}}>
                                    Buy
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products;