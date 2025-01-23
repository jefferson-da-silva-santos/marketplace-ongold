import React, { useEffect, useState } from "react";
import Container from "../Container";
import BannerHome from "../BannerHome";
import GroupProducts from "../GroupProducts";
import CardProduct from "../CardProduct";
import productsArr from '../../data/products.json';
import CardFillterProducts from "../CardFillterProducts";

const HomePage = ({ payment }) => {
  const [currentImgBanner, setCurrentImgBanner] = useState('');
  const [products, setProducts] = useState(productsArr);
  
  // Função para definir o banner com base na hora atual
  function handleImgBanner() {
    const currentHour = new Date().getHours();
    if (currentHour >= 1 && currentHour < 13) {
      setCurrentImgBanner('url("/public/banner.png")');
    } else if (currentHour >= 13 && currentHour < 19) {
      setCurrentImgBanner('url("/public/banner3.png")');
    } else {
      setCurrentImgBanner('url("/public/banner3.png")');
    }
  }

  const filterArrProducts = (filter) => {
    return productsArr.filter((product) => product.category === filter);
  }

  const filterCategories = (arr) => {
    const arrCtg = Array.from(new Set(arr.map(item => item.category)));
    arrCtg.unshift('Todas');
    return arrCtg;
  }
  const [categories, setCategories] = useState(filterCategories(productsArr));
  
  // useEffect para definir o banner quando o componente for montado
  useEffect(() => {
    handleImgBanner();
  }, []);

  return (
    <Container className={"container-home"}>
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
              <span className="username">Username</span>
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
            />
            <a href="" className="btn-filter">
              <i className="bi bi-three-dots-vertical"></i>
            </a>
          </div>
        </div>
      </nav>
      <main>
        <BannerHome currentImgBanner={currentImgBanner} />
        <CardFillterProducts filterArrProducts={filterArrProducts} setProducts={setProducts} arrCategory={categories} productsArr={productsArr}/>
        <GroupProducts>
          {
            products.map(item => {
              return (
                <CardProduct key={item.id} title={item.name} imgSrc={item.srcImg} description={item.description} webSitePrice={item.websitePrice} storePrice={item.storePrice}></CardProduct>
              )
            })
          }
        </GroupProducts>
      </main>
    </Container>
  );
};

export default HomePage;
