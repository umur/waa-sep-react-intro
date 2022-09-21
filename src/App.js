
import './App.css';
import Address from './components/Address';
import Product from './components/Product';
import Review from './components/Review';
import User from './components/User';

function App() {
  return (
    <div className="App">
        <Product/>
        <User/>
        <Address/>
        <Review/>
    </div>
  );
}

export default App;
