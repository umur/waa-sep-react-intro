import logo from './logo.svg';
import './App.css';
import Products from './components/product/Products';
import Reviews from './components/Review/Reviews';
import HomePage from './components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateProduct from './components/product/CreateProduct';
import Categories from './components/category/Categories';
function App() {
  return (
    <div className="App">
    <CreateProduct />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/categories" element={<Categories />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
