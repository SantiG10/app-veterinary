import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Search from "../Search"

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Veterinaria
      </Link>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="navbar-right" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Mascotas<span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/veterinarias">
              Veterinari@s
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/consultas">
              Consultas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/duenos">
              Dueños
            </Link>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
}

export default Nav;
