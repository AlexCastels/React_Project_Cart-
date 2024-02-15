import { useContext, useEffect, useState } from "react"
import { Card } from "./Card"
import { Cart, CartContext } from "../context/CartContext"

export function Homepage(){
    
    const [products , setProducts] = useState([])
    const {handleBtn , handleDecrement , handleIncrement , handleReset , cart , total} = useContext(CartContext)
    
    async function getData(){
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            
        } catch (error) {
            console.error(error)   
        }
    }
    
    useEffect(()=>{
        getData()
    },[])
   
    return (
        <>
            <h1>E-Commerce</h1>
            <div className="container">
                {products.map((item) => (
                <Card key={item.id} item={item} event={handleBtn}/>
                ))}
            </div>
            <div className="chart-container">
                {cart.map((item)=>(
                    <p key={item.id}>{item.title} x {item.quantity}<button onClick={() => handleDecrement(item)}> - </button> || <button onClick={() => handleIncrement(item)}> + </button></p>       
                ))}
                {cart.length > 0 ? <p>Total: €{total}</p> : <p>Selezionare un prodotto</p>}
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}