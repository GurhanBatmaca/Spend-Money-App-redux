import { useSelector } from 'react-redux';

const Footer = () => {
    const products = useSelector(state => state.product);
  return (
    <div>
        {
            products.map((item) => (
                
                    item.count > 0 &&
                    <div>
                        <div>{item.name } x{ item.count}</div>
                        <div></div>
                        <div></div>
                    </div> 
            ))
        }
    </div>
  )
}

export default Footer