import { useSelector } from 'react-redux';

const Header = () => {
    const total_money = useSelector(state => state.money.total_money);
    
  return (
    <div className='header text-center'>
        <div>
            <h2>Spend Money</h2>
        </div>
        <h1>{total_money}</h1>
    </div>
  )
}

export default Header