import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

export default function CartWidget() {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="nav-link">
      <a href={'/cart'}>
        <img src="logo.svg" alt="" height={30} />
        <span className="badge text-bg-success">
          {
            cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
          }
        </span>
        </a>
    </div>
  )
}
