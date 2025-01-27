import React, { useEffect, useState } from "react";
import Container from "../Container";
import BannerHome from "../BannerHome";
import GroupProducts from "../GroupProducts";
import CardProduct from "../CardProduct";
import productsArr from "../../data/products.json";
import CardFillterProducts from "../CardFillterProducts";
import FooterHome from "../FooterHome";
import NavHome from "../NavHome";

const HomePage = ({ changeMessage, payment, user, productsCart, setProductsCart, setStage, formatCurrencyBRL }) => {
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

  const filterArrProducts = (filter: string) => {
    return productsArr.filter((product) => product.category === filter);
  };

  const filterCategories = (arr: any) => {
    const arrCtg = Array.from(new Set(arr.map((item) => item.category)));
    arrCtg.unshift("Todas");
    return arrCtg;
  };

  const handleSearchProducts = (e: any) => {
    const searchValue = (e.target as HTMLInputElement).value;
    if (searchValue === "") {
      setProducts(productsArr);
    } else {
      const filteredProducts = productsArr.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProducts(filteredProducts);
    }
    setCurrentPage(0);
  };

  const [categories, setCategories] = useState(filterCategories(productsArr));

  return (
    <Container className={"container-home"}>
      <button className="btn-cart-1" onClick={() => {
        setStage("payment");
      }}><span className="quant-cart">{productsCart.length}</span><i className="bi bi-cart-fill"></i></button>
      <NavHome payment={payment} user={user} handleSearchProducts={handleSearchProducts} />
      <main className="container-home__main">
        <BannerHome currentImgBanner={currentImgBanner} />
        <CardFillterProducts
          currentPage={setCurrentPage}
          filterArrProducts={filterArrProducts}
          setProducts={setProducts}
          arrCategory={categories}
          productsArr={productsArr}
          searchProducts={filterArrProducts}
        />
        <GroupProducts>
          {productsPage.map((item) => {
            return (
              <CardProduct
                key={item.id}
                products={products}
                formatCurrencyBRL={formatCurrencyBRL}
                id={item.id}
                title={item.name}
                imgSrc={item.srcImg}
                description={item.description}
                webSitePrice={item.websitePrice}
                storePrice={item.storePrice}
                setProductsCart={setProductsCart}
                changeMessage={changeMessage}
                productsCart={productsCart}
              ></CardProduct>
            );
          })}
          <div className="group-pagination">
          {
            Array.from(Array(totPage), (e, i) => {
              return (
                <button 
                style={i === currentPage ? {transform: "scale(130%)"} : {}}
                value={i} onClick={(e) => {
                  setCurrentPage(Number((e.target as HTMLButtonElement).value));
                  
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
