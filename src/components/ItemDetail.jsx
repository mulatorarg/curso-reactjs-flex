import { useContext } from "react";
import ItemCount from './ItemCount';
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

function ItemDetail({ detail }) {

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {

    addItem(detail, quantity)

    Swal.fire({
      icon: "success",
      title: "Se agrego el producto al carrito"
    });

  }

  return (
    <div className='card shadow-sm mx-auto' key={detail.id} style={{ maxWidth: '480px' }} >
      <img src={detail.thumbnail} className="rounded mx-auto d-block card-img-top p-0 m-0 mw-50" alt={detail.name} />
      <div className='card-body'>
        <h6>{detail.name}</h6>
        <p>{detail.description}</p>
        Precio: $ {detail.price}<br />
        <span className='badge text-bg-success float-end'>{detail.category}</span><br />
        <span className='badge text-bg-info float-end'>Stock Disp: {detail.stock}</span>
        <ItemCount stock={detail.stock} onAdd={onAdd}></ItemCount>
      </div>
    </div>
  )
}

export default ItemDetail;
