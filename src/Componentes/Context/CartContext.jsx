import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}


function CartContextProvider ( {children} ) {
    
    const [cartList, setCartList] = useState([]);


    function agregarAlCarrito(item){

        if (evitarDuplicados(item)) {

            return console.log('existe, cambio la cantidad')
                        

        }
        else{
            return setCartList([ ...cartList, item ])
        }

    }
    console.log(cartList)

    const evitarDuplicados = (parametro) => {

        const findcartList = cartList.find(el => el.item.id === parametro.item.id)
        return findcartList;
    }

    

    function vaciarCarrito(){
        setCartList([])
    }
    

    return <cartContext.Provider value={{cartList, agregarAlCarrito, vaciarCarrito}}>
                {children}
            </cartContext.Provider>

}

export default CartContextProvider;

