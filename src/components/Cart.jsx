import { useCartContext } from "../context/CartContext";

const Cart = () => {

  const { cart, cleanCart, total, quantityTotal } = useCartContext();

  if (quantityTotal === 0) {
    return (
      <div className="alert alert-danger">
        <p>No tienes productos en el carrito.</p>
        <a href={'/'}>Ver Productos</a>
      </div>
    )
  }

  return (
    <div className="row">

      <div className="col-md-6 col-sm-12">
        {
          cart.map(product => <CartItem key={product.id} {...product} />)
        }

        <h3>Total: $ {total} </h3>
        <h3>Cantidad Total: {quantityTotal} </h3>
        <button onClick={() => cleanCart()}>Vaciar Carrito</button>
        <a href={'/checkout'}>Finalizar Compra</a>

      </div>

      <div className="col-md-6 col-sm-12">

        <div class="input-group mb-3">
          <span className="input-group-text" id="email">✉</span>
          <input type="text" className="form-control" placeholder="Tu correo electrónico" aria-label="email" aria-describedby="email" />
        </div>

        <div class="input-group mb-3">
          <span className="input-group-text" id="name">👉</span>
          <input type="text" className="form-control" placeholder="Tu nombre completo" aria-label="name" aria-describedby="name" />
        </div>

        <div class="input-group mb-3">
          <span className="input-group-text" id="phone">📞</span>
          <input type="text" className="form-control" placeholder="Tu teléfono" aria-label="phone" aria-describedby="phone" />
        </div>

      </div>

    </div>
  )
}

export default Cart;
