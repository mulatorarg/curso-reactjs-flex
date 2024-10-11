import React from "react";
import { CartWidget } from './CartWidget';

export const NavBar = () => {

  return (
    <div className="navbar navbar-expand-lg border-bottom bg-body-tertiary mb-2">
      <div className="container">
        <a className="navbar-brand" href="/">Agusele ReactJS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navShop" aria-controls="navShop" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navShop">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className='nav-link' href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li key='MOCHILAS'><a className="dropdown-item" href={'/category/MOCHILAS'}>MOCHILAS</a></li>
                <li key='ZAPATILLAS DEPORTIVAS'><a className="dropdown-item" href={'/category/ZAPATILLAS DEPORTIVAS'}>ZAPATILLAS DEPORTIVAS</a></li>
                <li key='ZAPATILLAS RUNNING'><a className="dropdown-item" href={'/category/ZAPATILLAS RUNNING'}>ZAPATILLAS RUNNING</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
