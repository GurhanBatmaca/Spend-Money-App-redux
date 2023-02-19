import { useDispatch } from 'react-redux';
import { buy,sell } from '../redux/slices/moneySlice';
import productsData from '../data/productsData.json'

const Products = () => {
    const dispatch = useDispatch();
  return (
    <div>
        {
            productsData.map((product,index) => (
                <div key={index}>
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.img}</p>
                    </div>
                    <div>
                        <button onClick={() => {dispatch(sell(1))}}>Sell</button>
                        <input  type={"number"}></input>
                        <button onClick={() => {dispatch(buy(1))}}>Buy</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products