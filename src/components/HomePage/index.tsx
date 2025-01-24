import React, { useEffect, useState } from "react";
import Container from "../Container";
import BannerHome from "../BannerHome";
import GroupProducts from "../GroupProducts";
import CardProduct from "../CardProduct";
import productsArr from "../../data/products.json";
import CardFillterProducts from "../CardFillterProducts";
import FooterHome from "../FooterHome";

const HomePage = ({ payment }) => {
  const [products, setProducts] = useState(productsArr);
  const [itensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const totPage = Math.ceil(products.length / itensPerPage);
  const init = currentPage * itensPerPage;
  const end = init + itensPerPage;
  const productsPage = products.slice(init, end);

  const [currentImgBanner, setCurrentImgBanner] = useState("");

  function handleImgBanner() {
    const currentMinute = new Date().getMinutes();

    if (currentMinute >= 0 && currentMinute < 20) {
      setCurrentImgBanner('url("/public/banner.png")');
    } else if (currentMinute >= 20 && currentMinute < 40) {
      setCurrentImgBanner('url("/public/banner3.png")');
    } else {
      setCurrentImgBanner('url("/public/banner2.png")');
    }
  }

  useEffect(() => {
    handleImgBanner();
    const interval = setInterval(handleImgBanner, 60000); // Atualiza a cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  const filterArrProducts = (filter) => {
    return productsArr.filter((product) => product.category === filter);
  };

  const filterCategories = (arr) => {
    const arrCtg = Array.from(new Set(arr.map((item) => item.category)));
    arrCtg.unshift("Todas");
    return arrCtg;
  };
  const [categories, setCategories] = useState(filterCategories(productsArr));

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
        <CardFillterProducts
          filterArrProducts={filterArrProducts}
          setProducts={setProducts}
          arrCategory={categories}
          productsArr={productsArr}
        />
        <GroupProducts>
          {productsPage.map((item) => {
            return (
              <CardProduct
                key={item.id}
                title={item.name}
                imgSrc={item.srcImg}
                description={item.description}
                webSitePrice={item.websitePrice}
                storePrice={item.storePrice}
              ></CardProduct>
            );
          })}
          <div className="group-pagination">
          {
            Array.from(Array(totPage), (e, i) => {
              return (
                <button 
                style={i === currentPage ? {transform: "scale(120%)"} : {}}
                value={i} onClick={(e) => {
                  setCurrentPage(Number((e.target as HTMLButtonElement).value));
                  console.log((e.target as HTMLButtonElement).value);
                  
                }} className="btn-pagination" key={i}>{i + 1}</button>
              )
            })
          }
          </div>
        </GroupProducts>
      </main>
      <FooterHome />
    </Container>
  );
};

export default HomePage;
