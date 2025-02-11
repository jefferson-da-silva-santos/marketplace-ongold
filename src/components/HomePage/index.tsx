import React, { useEffect, useState } from "react";
import Container from "../Container";
import BannerHome from "../BannerHome";
import GroupProducts from "../GroupProducts";
import CardProduct from "../CardProduct";
import productsArr from "../../data/products.json";
import CardFillterProducts from "../CardFillterProducts";
import FooterHome from "../FooterHome";
import NavHome from "../NavHome";
import BasicPagination from "../BasicPagination"; // Importando o componente de paginação

const HomePage = ({ handleNotFound, changeMessage, payment, user, productsCart, setProductsCart, setStage, formatCurrencyBRL }) => {
  const [products, setProducts] = useState(productsArr);
  const [itensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1); // Alterado para iniciar em 1 (Material-UI usa 1-based index)
  const totPage = Math.ceil(products.length / itensPerPage);
  const init = (currentPage - 1) * itensPerPage;
  const end = init + itensPerPage;
  const productsPage = products.slice(init, end);

  const [currentImgBanner, setCurrentImgBanner] = useState("");

  // Atualizar imagem do banner dinamicamente
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

  // Função de filtro de produtos por categoria
  const filterArrProducts = (filter: string) => {
    return productsArr.filter((product) => product.category === filter);
  };

  // Filtrar categorias existentes
  const filterCategories = (arr: any) => {
    const arrCtg = Array.from(new Set(arr.map((item) => item.category)));
    arrCtg.unshift("Todas");
    return arrCtg;
  };

  // Manipular busca de produtos pelo nome
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
    setCurrentPage(1);
  };

  const [categories] = useState(filterCategories(productsArr));

  const [quantityItensCart, setQuantityItensCart] = useState(0);

  useEffect(() => {
    setQuantityItensCart(productsCart.reduce((total, product) => total + product.quantity, 0));
  }, [productsCart])

  return (
    <Container className={"container-home"}>
      <button className="btn-cart-1" onClick={() => setStage("payment")}>
        <span className="quant-cart">{quantityItensCart}</span>
        <i className="bi bi-cart-fill"></i>
      </button>

      <NavHome
        setStage={setStage}
        handleNotFound={handleNotFound}
        changeMessage={changeMessage}
        payment={payment}
        user={user}
        handleSearchProducts={handleSearchProducts}
      />
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
          {productsPage.map((item) => (
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
            />
          ))}

          {/* Paginação utilizando Material-UI */}
          <div className="group-pagination">
            <BasicPagination
              quant={totPage}
              handlePage={(event, value) => setCurrentPage(value)}
              currentPage={currentPage}
            />
          </div>
        </GroupProducts>
      </main>
      <FooterHome />
    </Container>
  );
};

export default HomePage;
