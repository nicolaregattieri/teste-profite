import React, { Component } from "react";
import Product from "../../../JSON/product";

class Shelf extends Component {
  render() {
    return (
      <div className="shelf">
        <div className="container">
          <h3 className="shelf__title tlt-txt">Produtos</h3>
        </div>
        <div className="shelf__wrapper shelf-carousel" data-glide-el="track">
          {Product.map((productDetail, index) => {
            return (
              <li key={productDetail.productId}>
                <div className="product">
                  <img
                    className="product__media"
                    src={productDetail.skus[0].image}
                  />
                  <h1 className="product__name">{productDetail.name}</h1>
                  <img className="product__rating" src="/arquivos/rating.png" />
                  <div className="product__price">
                    <p className="price__list sml-txt">
                      De: {productDetail.skus[0].listPriceFormated}
                    </p>
                    <p className="price__best">
                      por {productDetail.skus[0].bestPriceFormated}
                    </p>
                    <p className="price__installment sml-txt">
                      ou em {productDetail.skus[0].installments}x de{" "}
                      {productDetail.skus[0].installmentsValue}
                    </p>
                  </div>
                  <div className="product__actions">
                    <button className="btn btn--buy">
                      <img src="/arquivos/add-cart.png" />
                      Comprar
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Shelf;
