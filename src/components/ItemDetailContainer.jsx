import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProduct } from '../firebase/db';


function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    //fetch(`https://66e84fadb17821a9d9dc37ab.mockapi.io/api/v1/products/${id}`)
    //  .then(res => res.json())
    //  .then(res => setDetail(res))

    getProduct(id, setDetail);
  }, [id]);

  return (
    <ItemDetail detail={detail}></ItemDetail>
  )
}

export default ItemDetailContainer;
