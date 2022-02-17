import { useState } from "react";



function ItemCount ({initial, stock, onAdd}) {

    const [contador, setContador] = useState(initial);
    console.log(contador)
    
    const handlerAumentar =()=> {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const handlerRestar =() => {
        if(contador > initial){
            setContador(contador -1)
        }
    }


    return (
        <div className="container w-50">
            <h3>{contador}</h3>
            <br></br>
            <button className="btn btn-outline-primary" onClick={handlerAumentar}>+</button>
            <button className="btn btn-outline-primary" onClick={handlerRestar}>-</button>
            <button className="btn btn-outline-primary" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
        </div>
    )

}

export default ItemCount;