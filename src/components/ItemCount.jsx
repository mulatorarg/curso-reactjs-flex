import { useEffect, useState } from 'react';

import { useCartContext } from '../context/CartContext'

function ItemCount({ detail, count, stock }) {

  const { addProduct } = useCartContext();

  const [contador, setContador] = useState(count);

  /** Sumar una unidad al contador del producto agregar al carrito. */
  const btnIncrementar = () => {
    if (contador < stock) setContador(contador + 1);
  }

  /** Restar una unidad al contador del producto agregar al carrito. */
  const btnDecrementar = () => {
    if (contador > 1) setContador(contador - 1);
  }

  /** Agregar unidades del producto al carrito. */
  const btnComprar = () => {
    addProduct(detail, contador);
  }

  useEffect(() => {
  }, [contador]);

  return (
    <div className="input-group mt-3 mx-auto shadow-sm" style={{ width: '120px!important' }}>
      <button onClick={btnDecrementar} className="btn btn-sm btn-danger"> ➖ </button>
      <input type="text" className="form-control form-control-sm text-center" placeholder="" value={contador}  />
      <button onClick={btnIncrementar} className="btn btn-sm btn-success"> ➕ </button>
      <button onClick={btnComprar()} className="btn btn-sm btn-primary"> Agregar al Carrito </button>
    </div>
  )
}

export default ItemCount;
