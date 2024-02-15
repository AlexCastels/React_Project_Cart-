import { useContext, useEffect, useState } from "react"
import { Card } from "./Card"
import { CartContext } from "../context/CartContext"

export function Homepage(){
    
    const [products , setProducts] = useState([])
    const {handleBtn} = useContext(CartContext)
    
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
                <Card key={item.id} item={item} event={() => {handleBtn(item)}}/>
                ))}
            </div>           
        </>
    )
}