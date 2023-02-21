import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';



function App() {

  return (
    <div className="App">
      <div className='container'>
      {/* <div className='sdeneme'>deneme</div> */}

        <Header />
        <div>
          <Products />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
