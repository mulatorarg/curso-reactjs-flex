import { Card, Col } from 'react-bootstrap';

function ItemList({ listado = [] }) {

  return (
    <>
      {
        listado.map(producto =>
          <Col key={producto.id}>
            <Card className='shadow-sm'>
              <img src={producto.avatar} className="rounded mx-auto d-block card-img-top p-0 m-0" alt={producto.name}></img>
              <Card.Body>
                <h6>{producto.name}</h6>
                <p>Precio: $ {producto.price}</p>
                <div className='d-flex justify-content-evenly my-2'>
                  <a className="btn btn-sm btn-success" href={'/product/' + producto.id}>Ver</a>
                  <button className="btn btn-sm btn-primary" >Comprar</button>
                </div>
                <span className='badge text-bg-info float-end'>{producto.category}</span>
                <span className='badge text-bg-info float-end'>Stock Disp: {producto.stock}</span>
              </Card.Body>
            </Card>
          </Col>
        )
      }
    </>
  )

}

export default ItemList;

/* onClick={addProduct(producto, 1)} */
