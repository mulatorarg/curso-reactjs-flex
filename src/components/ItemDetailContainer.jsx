import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProduct } from '../firebase/db';


function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct(id, setDetail);
  }, [id]);

  return (
    <ItemDetail detail={detail}></ItemDetail>
  )
}

export default ItemDetailContainer;
