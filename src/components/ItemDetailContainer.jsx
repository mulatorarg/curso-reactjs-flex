import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://66e84fadb17821a9d9dc37ab.mockapi.io/api/v1/products/${id}`)
      .then(res => res.json())
      .then(res => setDetail(res))
  });

  return (
    <ItemList detail={detail}></ItemList>
  )
}

export default ItemDetailContainer;
