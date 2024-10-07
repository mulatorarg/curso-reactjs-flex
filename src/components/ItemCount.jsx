import { useState } from "react";

function ItemCount({ count, stock, funcionAgregar }) {

  const [contador, setContador] = useState(count);

  const btnIncrementar = () => {
    if (contador < stock) setContador(contador + 1);
  }

  const btnDecrementar = () => {
    if (contador > count) setContador(contador - 1);
  }

  return (
    <div className="input-group mt-3 mx-auto shadow-sm" style={{ width: '120px' }}>
      <button onClick={btnDecrementar} className="btn btn-sm btn-danger" type="button" id="btnDecrementar"> - </button>
      <input type="text" className="form-control form-control-sm text-center" placeholder="" value={contador} />
      <button onClick={btnIncrementar} className="btn btn-sm btn-success" type="button" id="btnIncrementar"> + </button>
    </div>
  )
}

export default ItemCount;
