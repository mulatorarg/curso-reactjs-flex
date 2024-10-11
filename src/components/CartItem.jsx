import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item, cantidad }) => {
    //const { eliminarProducto } = useContext(CarritoContext);

    const eliminarProducto = (item) => {
      console.log(item);
    }

    return (
        <div>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: {item.precio} </p>
            <button onClick={()=> eliminarProducto(item.id)}> Eliminar Producto </button>
            <hr />
        </div>
    )
}

export default CartItem;
