import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="alert alert-danger">
        <p>No tienes productos en el carrito.</p>
        <a href={'/'}>Ver Productos</a>
      </div>
    )
  }

  return (
    <div>
      {
        carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
      }

      <h3>Total: $ {total} </h3>
      <h3>Cantidad Total: {cantidadTotal} </h3>
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <a href={'/checkout'}>Finalizar Compra</a>
    </div>
  )
}

export default Cart
