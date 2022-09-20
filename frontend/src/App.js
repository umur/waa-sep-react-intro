
import './App.css';
import { Address } from './components/apps/Address/Address';
import { Category } from './components/apps/Category/Category';
import { Product } from './components/apps/Product/Product';
import { User } from './components/apps/User/User';

function App() {
  return (
    <main>
      {/* header */}
      <div className='container'>
        <Address />
        <Category />
        <Product />
        <User />
      </div>
      {/* footer */}
    </main>
  );
}

export default App;
