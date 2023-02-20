import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../redux/slices/productSlice';

const Products = () => {
    const products = useSelector(state => state.product);
    const total_money = useSelector(state => state.money.total_money);
    const dispatch = useDispatch();

  return (
    <div className='row products'>
        {
            products.map((product,index) => (
                <div className='col-md-4' key={index}>
                    <div className='p-3'>
                        <div className='product bg-white'>
                            <div><img src={`${product.img}`}/></div>
                            <div className='text-center'>{product.name}</div>
                            <div className='text-center'>{product.price}₺</div>
                        </div>
                        <div className='p-3 bg-white'>
                            <div className='d-flex justify-content-between inputs'>
                                <button 
                                    disabled={ product.count > 0 ? false : true} 
                                    className={`btn btn-danger`} onClick={() => {dispatch(decrement({price:product.price,name: product.name}))}}>
                                    Sell
                                </button>
                                <input
                                onKeyDown={() => {console.log("a");}}
                                    disabled={total_money > product.price ? false : true}
                                    value={product.count} 
                                    className='text-center'  
                                    type={"number"}>                               
                                </input>
                                <button
                                    disabled={total_money > product.price ? false : true} 
                                    className={`btn btn-success`} onClick={() => {dispatch(increment({price:product.price,name: product.name}))}}>
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