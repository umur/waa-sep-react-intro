import * as React from "react";
import {render} from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Header, Products,Categories, Footer, PageNotFound} from "./components";
import axios from "axios";

let rootElement = document.getElementById("root");
axios.defaults.baseURL = "http://localhost:4040/"
render(
    <div>
        <div>
            <Header name="Guest"></Header>
        </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
        <div>
            <Footer></Footer>
        </div>
    </div>,
    rootElement);
