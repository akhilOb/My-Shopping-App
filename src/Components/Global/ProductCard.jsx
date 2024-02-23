import React from "react";
import { Button } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import ImageWrapper from "./ImageWrapper";
function ProductCard({thumbnail}) {
  return (
    <article className="product-card border border-1 rounded-4 overflow-hidden">
      <div className="product-card__thumbnail">
        <div className="product-card__thumbnail-wrapper">
          <ImageWrapper imageUrl={thumbnail}/>
        </div>
      </div>
      <div className="product-card__pricing"></div>
      <div className="product-card__action border-top d-flex">
        <Button className="bg-transparent border-0 w-90 text-dark text-uppercase font-bold para-sm">ADD TO Cart</Button>
        <Button className="bg-transparent border-0 border-start rounded-0">
          <Heart className="text-danger" />
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
