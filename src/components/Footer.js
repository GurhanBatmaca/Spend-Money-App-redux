import { useSelector } from 'react-redux';

const Footer = () => {
    const products = useSelector(state => state.product);
    const total_money = useSelector(state => state.money.total_money);
    const spending = 100000000000 - total_money;
  return (
    <div className='text-center p-4'>        
          { spending > 0 && 
            <>
              { products.map((item,index) => (               
                item.count > 0 &&
                <div key={index} className="row">
                    <div className='col-4'>{item.name } </div>
                    <div className='col-4'>x{ item.count}</div>
                    <div className='col-4'>{(item.price * item.count).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₺</div>
                </div> 
                
              ))}

              <hr></hr>
              <div className='row'>
                <div className='col-4'>Total spending:</div> 
                <div className='col-4'></div>
                <div className='col-4'>{spending.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₺</div>
              </div>
            </>
          }
    </div>
  )
}

export default Footer