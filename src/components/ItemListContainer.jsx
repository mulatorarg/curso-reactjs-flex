import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../firebase/db';

import { useCartContext } from '../context/CartContext';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  const {cart, total, quantityTotal} = useCartContext();

  useEffect(() => {
    //if (categoryName) {
    //  getProductsByCategory(categoryName, setProducts);
    //} else {
    //  getProducts(setProducts);
    //}

    categoryName ? getProductsByCategory(categoryName, setProducts) : getProducts(setProducts);

    console.log(cart, total, quantityTotal);
  }, [categoryName]);

  return (
    <Container>
      <h5>{categoryName ? 'Productos de la categoria: ' + categoryName : 'Todos los products'}</h5>
      <Row xs={1} md={2} lg={4} className='g-2'>
        <ItemList listado={products}></ItemList>
      </Row>
    </Container>
  )
}

export default ItemListContainer;
