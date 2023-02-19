import { useDispatch, useSelector } from 'react-redux';
import { buy,sell } from '../redux/slices/moneySlice';

const Products = () => {
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();

  return (
    <div className='row products'>
        {
            products.map((product,index) => (
                <div className='col-md-4' key={index}>
                    <div className='product'>
                        <div className='text-center'>{product.img}</div>
                        <div className='text-center'>{product.name}</div>
                        <div className='text-center'>{product.price}₺</div>
                    </div>
                    <div className='p-3'>
                        <div className='d-flex justify-content-between inputs'>
                            <button className={`btn btn-danger ${product.count > 0 ? "active" : ""}`} onClick={() => {dispatch(sell(product.price))}}>Sell</button>
                            <input className='text-center'  type={"number"}></input>
                            <button className={`btn btn-success ${product.count > 0 ? "active" : ""}`} onClick={() => {dispatch(buy(product.price))}}>Buy</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products;