import React from "react";
import { Button } from "react-bootstrap";
import { Heart, StarFill } from "react-bootstrap-icons";
import ImageWrapper from "./ImageWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const SlideComponent = () => {
  return (
    <div className="ccard-thumbnail overflow-hidden position-relative p-1 overflow-hidden">
      <button className="color-green new-btn p-1 font-bold position-absolute mt-2 ">
        New
      </button>
      <img
        src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695638309_7831980.jpg?format=webp&w=900&dpr=1.3"
        alt=""
        className="w-100 h-100 rounded-4"
      />
    </div>
  );
};
function ProductCard() {
  return (
    <article className="product-card border border-1 rounded-4 overflow-hidden mb-5">
      <div className="product-card__thumbnail rounded-4">
        <div className="product-card__thumbnail-wrapper rounded-4">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className=""
          >
            <SwiperSlide>
              <SlideComponent />
            </SwiperSlide>
            <SwiperSlide>
              <SlideComponent />
            </SwiperSlide>
            <SwiperSlide>
              <SlideComponent />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="product-card__pricing">
        <div className="p-2">
          <span className="para-sm d-inline-block me-1 font-bold">₹5600</span>{" "}
          <del className="para-xs text-secondary d-inline-block me-2 font-medium">
            ₹5689
          </del>
          <span className="color-green para-xs d-inline-block">30% off</span>
          <p className="mb-2 para-xs text-secondary">Black Veirdo T-shirt</p>
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex">
                <div className="para-sm">
                  <StarFill className="text-warning" />{" "}
                  <span className="border-end pe-1 font-medium text-dark">
                    4.0
                  </span>{" "}
                  <span className="text-secondary">2K</span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="product-card__action border-top d-flex">
        <Button className="bg-transparent border-0 w-90 text-dark text-uppercase font-bold para-sm">
          ADD TO Cart
        </Button>
        <Button className="bg-transparent border-0 border-start rounded-0">
          <Heart className="text-danger" />
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
