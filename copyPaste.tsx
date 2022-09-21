/*
// App
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Products from "./components/ProductsComponent";
import Categories from "./components/CategoriesComponent";
//
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
    const element = (

        <div>
            <div>
                <HeaderComponent name="Guest"></HeaderComponent>
            </div>
            <div className="container">
                <h1>Discount expiring soon!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <button onClick={() => clearInterval(timerIntervaId)}>Stop timer</button>

                <Categories></Categories>
                <Products></Products>
            </div>

            <div>
                <FooterComponent></FooterComponent>
            </div>
        </div>

    );
    root.render(element);
}
const timerIntervaId = setInterval(tick, 1000);

//
*/
