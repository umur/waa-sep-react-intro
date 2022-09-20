import './css/styles.css';
import './css/store-front.css'

import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import ProductList from "./layout/ProductList";

function App() {
  return (
      <>
        <Nav />
        <Header />
          <div className="container" id="container">
              <div id="product-list">
                <ProductList />
              </div>
          </div>
          <Footer />
      </>
  );
}

export default App;
