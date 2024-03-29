import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css"
import { Cart } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Cart>
            <App/>
        </Cart>
    </BrowserRouter>
)

