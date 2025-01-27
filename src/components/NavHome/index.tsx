import React from "react";

const NavHome = ({payment, user, handleSearchProducts}) => {
  return (
    <nav className="container-home__nav">
      <div className="container-home__nav__primary">
        <div className="menu">
          <i className="bi bi-list"></i>
          <span className="menu__text">
            Compra<span className="menu__text2">Daqui</span>
          </span>
        </div>

        <div className="menu-icons">
          <a href="" className="icon-bell">
            <i className="bi bi-bell-fill"></i>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              payment();
            }}
            href=""
            className="icon-cart"
          >
            <i className="bi bi-cart-fill"></i>
          </a>
          <div className="card-user">
            <a href="" className="card-user__img">
              <i className="bi bi-person-fill"></i>
            </a>
            <span className="username">{user}</span>
          </div>
        </div>
      </div>
      <div className="container-home__nav__secundary">
        <div className="group-search">
          <a href="" className="btn-search">
            <i className="bi bi-search"></i>
          </a>
          <input
            type="text"
            placeholder="Buscar produto..."
            className="search"
            onChange={handleSearchProducts}
          />
          <a href="" className="btn-filter">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;