import logo from './logo.svg';
import './App.css';
import Products from './components/product/Products';
import Reviews from './components/Review/Reviews';
import HomePage from './components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/reviews" element={<Reviews />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
