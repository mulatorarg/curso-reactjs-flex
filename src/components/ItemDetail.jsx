import { Card } from 'react-bootstrap';

function ItemDetail({ detalle = {} }) {

  return (
    <>
      <Card className='p-0 mx-2' key={detalle.id}>
        <img src={detalle.avatar} className="card-img-top p- m-0" alt={detalle.name}></img>
        <Card.Body className='card-body'>
          <h6>{detalle.name}</h6>
          Precio: $ {detalle.price}<br />
          <span className='badge text-bg-success float-end'>{detalle.category}</span>
        </Card.Body>
      </Card>
    </>
  )
}

export default ItemDetail;
