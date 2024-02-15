import { createContext, useState } from "react";

export const CartContext = createContext()
export function Cart({children}){

    const [cart , setCart] = useState([])
    const [total , setTotal] = useState(0)

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

    return (
        <CartContext.Provider value={{handleBtn , handleDecrement , handleIncrement , handleReset , handleShowTotal , cart , total}}>
            {children}
        </CartContext.Provider>
    )
}