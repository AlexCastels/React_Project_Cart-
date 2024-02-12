export function Card({item , event}){
    return(
        <div className="card">
            <h2>{item.title}</h2>
            <img src={item.image} alt="immagine prodotto" width={200}/>
            <p>€{item.price}</p>
            <button onClick={()=>event(item)}>Add to Cart</button>
        </div>
    )
}