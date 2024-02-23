import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {addItemToCart, getAllcart} from "../../redux/productDetailsSlice/productDetailsSlice";
import uniqid from 'uniqid';

function SelectToCart({ color_beige, available_size, setProductImages, id }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("1");
  const [selectedSize, setSelectedSize] = useState("");
  const cart = useSelector(
    (state) => state.productDetails.cart
  );
  console.log( cart, "cart in page");

  useEffect(() => {
    dispatch(getAllcart())
  }, [])

  const handleSelectColor = (item) => {
    setSelectedColor(item.id);
    setProductImages(item.original_images);
  };
  const handleSizeChange = (item) => {
    setSelectedSize(item.size);
  };
  const handleAddItemToCart = () => {
    const cartID=uniqid()
    const data = {
      selected_color: selectedColor,
      selected_size: selectedSize,
      product_id: id,
      cart_id:cartID
    };
    dispatch(addItemToCart(data));
  };
  function checkCart(){
const presant = cart.some(obj => obj.product_id === id);
return presant
// return true
  }
  return (
    <>
      <div className="title-secondary mb-2">COLOR-BEIGE</div>
      <div className="scollbar-0 mb-5"  style={{overflowX:"scroll"}}>
      <div className="d-flex gap-2 py-2" style={{width:"900px"}}>
        {color_beige &&
          color_beige.length > 0 &&
          color_beige.map((data, index) => {
            return (
              <div
                onClick={
                  () => handleSelectColor(data)
                  // setProductImages(data.original_images)
                }
                className={`rounded position-relative ${selectedColor==data.id?"selected-item":""}`}
                style={{
                  backgroundImage: `url(${data.thumbnail})`,
                  width: "85px",
                  height: "85px",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                key={index}
              >
                {data.available===false && <div className="mb-2 position-absolute bottom-0 end-0 text-center w-100">
                  <div className="warning ">sold out</div>
                  </div>}
              </div>
            );
          })}
      </div>
      </div>
     
      <div className="d-flex justify-content-between align-items-center">
        <div className="title-secondary mb-2">SELECT SIZE</div>
        <div className="color-pink para-sm font-medium">SIZE GUIDE</div>
      </div>
      <div className="d-flex gap-2 flex-wrap mb-3">
        {available_size &&
          available_size.length > 0 &&
          available_size.map((data, index) => {
            // console.log(data, "size thing in map");
            return (
              <div
                key={index}
              >
                <button   onClick={() => handleSizeChange(data)}
                className={`${
                  selectedSize === ""
                    ? data.preffered_size === true
                      ? "btn size-active bg-light para-sm"
                      : ""
                    : selectedSize === data.size
                    ? "btn size-active bg-light para-sm"
                    : ""
                } btn btn-outline-secondary para-sm`}> {data.size}</button>
               
                {data.items_left < 3 && <div className="para-xs color-orange text-center mt-1 ">{data.items_left} left</div>}
              </div>
            );
          })}
      </div>
      <button onClick={() => handleAddItemToCart ()} disabled={checkCart()} className="add-to-cart-btn rounded p-2 para-sm font-medium text-uppercase mb-5">
        ADD TO CART
      </button>
    </>
  );
}

export default SelectToCart;
