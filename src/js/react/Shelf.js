import React, { Component } from "react";
import Product from "../../../JSON/product";

class Shelf extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="shelf">
        <div className="shelf__title">Produtos</div>
        <div className="shelf__wrapper carousel" data-glide-el="track">
          {Product.map((productDetail, index) => {
            return (
              <li key={productDetail.productId}>
                <div className="product">
                  <h1 className="product__name">{productDetail.name}</h1>
                  <img
                    className="product__media"
                    src={productDetail.skus[0].image}
                  />
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
