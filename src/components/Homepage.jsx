import { useEffect, useState } from "react"
import { Card } from "./Card"

export function Homepage(){
    
    const [products , setProducts] = useState([])
    const [cart , setCart] = useState([])
    const [total , setTotal] = useState(0)
    
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

    function handleBtn(element){
        
        const isContained = cart.find((item) => item.id === element.id) 
        
        if(isContained){
            setCart(
                cart.map((item) => {
                    if(item.id === element.id){
                        return {...item , quantity : item.quantity + 1}
                    } else {
                        return item
                    }
                })
            )
        } else {
            setCart([ ...cart , {...element , quantity : 1}])
        }  
    }

    function handleDecrement(element){
        const isContained = cart.find((item) => item.id === element.id) 
        
        if(isContained.quantity === 1){
            const removedElement = cart.filter((el) => el.id !== element.id )
            setCart(removedElement)
        } else {
            setCart(
                cart.map((item) => {
                    if(item.id === element.id && item.quantity > 0){
                        return {...item , quantity : item.quantity - 1}
                    } else {
                        return item
                    }
                })
            )
        }
        
    }

    function handleIncrement(element){
        const isContained = cart.find((item) => item.id === element.id)
        
        if(isContained){
            setCart(
                cart.map((item) => {
                    if(item.id === element.id){
                        return {...item , quantity : item.quantity + 1}
                    } else {
                        return item
                    }
                })
            )
        } else {
            setCart([ ...cart , {...element , quantity : 1}])
        } 
        
    }

    function handleShowTotal(){
        const totalPrice = cart.reduce((a , item) => a + item.price * item.quantity , 0).toFixed(2)
        console.log(totalPrice);
        setTotal(totalPrice)
    }

    function handleReset(){
        setCart([])
    }

    useEffect(()=>{  //usato per il log reale di chart e mostrare il totale ogni volta che chart viene modificato
        console.log(cart)
        handleShowTotal()
    },[cart])
    
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