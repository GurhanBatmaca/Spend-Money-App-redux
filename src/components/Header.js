import { useSelector } from 'react-redux';

const Header = () => {
    const total_money = useSelector(state => state.money.total_money);
    
  return (
    <div className='header text-center'>
        <div className='p-4 bg-white'>
            <h2>Spend Money</h2>
        </div>
        <h1 className='p-4 bg-success sticky-sm-top'>{total_money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₺</h1>
    </div>
  )
}

export default Header