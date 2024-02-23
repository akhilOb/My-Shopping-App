import React from "react";
import { Button } from "react-bootstrap";
import { Heart, StarFill } from "react-bootstrap-icons";
import ImageWrapper from "./ImageWrapper";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {addItemToCart} from "../../redux/productDetailsSlice/productDetailsSlice";

const SlideComponent = ({src}) => {
  return (
    <div className="ccard-thumbnail overflow-hidden position-relative p-1 overflow-hidden">
      <button className="color-green new-btn p-1 font-bold position-absolute mt-2 ">
        New
      </button>
      <img
        src={src}
        alt=""
        className="w-100 h-100 rounded-4"
      />
    </div>
  );
};
function ProductCard({data}) {
  const dispatch = useDispatch();
  const cart = useSelector(
    (state) => state.productDetails.cart
  );
  function checkCart(){
    const presant = cart.some(obj => obj.product_id === data.id);
    return presant
    // return true
      }
      function getTheOfferPrice(original, off){
        if (typeof original !== 'number' || typeof off !== 'number') {
         return "Invalid input. Please provide valid numbers.";
     }
     const discountAmount = (original * off) / 100;
     const offerPrice = original - discountAmount;
     return offerPrice;
   }

   const handleAddItemToCart = () => {
    const cartID=uniqid()
    const postDat = {
      product_id: data.id,
      cart_id:cartID
    };
    dispatch(addItemToCart(postDat));
  };
  return (
    <article className="product-card border border-1 rounded-4 overflow-hidden mb-5">
      <Link  to={`/${data.id}`}>
      <div className="product-card__thumbnail rounded-4">
        <div className="product-card__thumbnail-wrapper rounded-4">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            pagination={{clickable :true}}
            modules={[Pagination]}
            // clickable={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className=""
          >
            {data.images&&data.images.length>0&&data.images.map((item, index)=>{
              return (
                <SwiperSlide key={index}>
              <SlideComponent src={item}/>
            </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="product-card__pricing">
        <div className="p-2">
          <span className="para-sm d-inline-block me-1 font-bold">₹{getTheOfferPrice(data.original_price,data.applied_off)}</span>
          <del className="para-xs text-secondary d-inline-block me-2 font-medium">
            ₹{data.original_price}
          </del>
          <span className="color-green para-xs d-inline-block">{data.applied_off}% off</span>
          <p className="mb-2 para-xs text-secondary">{data.product_name}</p>
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
      </Link>
      <div className="product-card__action border-top d-flex">
        <Button onClick={() => handleAddItemToCart ()} disabled={checkCart()} className="bg-transparent border-0 w-90 text-dark text-uppercase font-bold para-sm">
        {checkCart()?"ADDED TO CART":"ADD TO CART"}
        </Button>
        <Button className="bg-transparent border-0 border-start rounded-0">
          <Heart className="text-danger" />
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
