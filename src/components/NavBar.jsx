import React from "react";
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom'

export const NavBar = () => {

  return (
    <div className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Agusele ReactJS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navShop" aria-controls="navShop" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navShop">
          <ul className="navbar-nav ms-auto">
            <li className="nav-link">
              <Link className="dropdown-item" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</Link>
              <ul className="dropdown-menu">
                <Link className="dropdown-item" to="/category/MOCHILAS">MOCHILAS</Link>
                <Link className="dropdown-item" to="/category/ZAPATILLAS DEPORTIVAS">ZAPATILLAS DEPORTIVAS</Link>
                <Link className="dropdown-item" to="/category/ZAPATILLAS RUNNING">ZAPATILLAS RUNNING</Link>
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
