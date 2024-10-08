import ItemCount from './ItemCount';

function ItemDetail({ detail }) {

  return (
    <div className='card shadow-sm mx-auto' key={detail.id} style={{ maxWidth: '480px' }} >
      <img src={detail.avatar} className="rounded mx-auto d-block card-img-top p-0 m-0 mw-50" alt={detail.name} />
      <div className='card-body'>
        <h6>{detail.name}</h6>
        <p>{detail.description}</p>
        Precio: $ {detail.price}<br />
        <span className='badge text-bg-success float-end'>{detail.category}</span><br />
        <span className='badge text-bg-info float-end'>Stock Disp: {detail.stock}</span>
        <ItemCount detail={detail} count={1} stock={detail.stock}></ItemCount>
      </div>
    </div>
  )
}

export default ItemDetail;
