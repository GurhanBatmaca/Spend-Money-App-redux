import { useDispatch, useSelector } from 'react-redux';
import { buy,sell } from '../redux/slices/moneySlice';
import { plusCount,minusCount } from '../redux/slices/productSlice';

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
                            <button className={`btn btn-danger ${product.count > 0 ? "active" : ""}`} onClick={() => {dispatch(minusCount({price:product.price,name: product.name}))}}>Sell</button>
                            <input value={product.count} className='text-center'  type={"number"}></input>
                            <button className={`btn btn-success ${product.count > 0 ? "active" : ""}`} onClick={() => {dispatch(plusCount({price:product.price,name: product.name}))}}>Buy</button>
                            {/* <button className={`btn btn-success ${product.count > 0 ? "active" : ""}`} onClick={() => {dispatch(increaseCount(product.name))}}>a</button> */}
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products;