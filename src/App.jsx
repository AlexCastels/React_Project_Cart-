import { Link, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { CartPage } from "./components/CartPage";

export function App(){
    
    return (
        <div className="main">
            <span><Link to='/'>Homepage</Link> | <Link to ='cart'>Cart</Link></span>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='cart' element={<CartPage/>}/>
            </Routes>
            
        </div>
    )
}