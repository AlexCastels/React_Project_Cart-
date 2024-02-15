import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export function CartPage(){

    const {handleDecrement , handleIncrement , handleReset , cart , total} = useContext(CartContext)

    return (
        <div className="chart-container">
            {cart.map((item)=>(
                <p key={item.id}>{item.title} x {item.quantity}<button onClick={() => handleDecrement(item)}> - </button> || <button onClick={() => handleIncrement(item)}> + </button></p>       
            ))}
            {cart.length > 0 ? <p>Total: €{total}</p> : <p>Selezionare un prodotto</p>}
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}