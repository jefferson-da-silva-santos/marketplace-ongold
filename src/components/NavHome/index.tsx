import React, { useState } from "react";

const NavHome = ({
  setStage,
  payment,
  user,
  handleSearchProducts,
  changeMessage,
  handleNotFound,
}) => {
  const [isMenuUserVisible, setIsMenuUserVisible] = useState(false);
  return (
    <nav className="container-home__nav">
      <div className="container-home__nav__secundary">
        <div className="menu" onClick={handleNotFound}>
          <i className="bi bi-list"></i>
          <span className="menu__text">
            Compra<span className="menu__text2">Daqui</span>
          </span>
        </div>
        <div className="group-search">
          <a onClick={handleNotFound} href="" className="btn-search">
            <i className="bi bi-search"></i>
          </a>
          <input
            type="text"
            placeholder="Buscar produto..."
            className="search"
            onChange={handleSearchProducts}
          />
          <a
            onClick={(e) => {
              e.preventDefault();
              changeMessage(
                "Recurso ainda em construção!",
                "rrgb(255, 63, 63))",
                1000
              );
            }}
            href=""
            className="btn-filter"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </a>
        </div>
        <div className="menu-icons">
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

          <div
            className="card-user"
            onClick={() => {
              setIsMenuUserVisible(!isMenuUserVisible);
            }}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setIsMenuUserVisible(!isMenuUserVisible);
              }}
              href=""
              className="card-user__img"
            >
              <i className="bi bi-person-fill"></i>
            </a>
            <span className="username">{user}</span>

            {/* Menu usuário */}
            <aside
              className={`menu-user ${
                !isMenuUserVisible ? "menu-user-hidden" : "menu-user-show"
              }`}
            >
              <ul>
                <li
                  onClick={() => {
                    setStage("login");
                  }}
                >
                  <i className="bi bi-box-arrow-in-left"></i>
                  <span>Sair</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
