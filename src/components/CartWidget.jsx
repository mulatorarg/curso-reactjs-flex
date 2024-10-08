import { useCartContext } from '../context/CartContext';

export default function CartWidget() {
  const { quantityTotal } = useCartContext();

  return (
    <div className="btn btn-sm btn-success">
      <a href={'/cart'}>
        <img src="logo.svg" alt="" height={30} />
        <span className="badge text-bg-success">
          {
            //quantityTotal > 0 ?? <strong> {quantityTotal}: '' </strong>
            quantityTotal
          }
        </span>
      </a>
    </div>
  )
}
