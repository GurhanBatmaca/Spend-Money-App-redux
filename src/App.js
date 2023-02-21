import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
