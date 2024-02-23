import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function SelectToCart({ color_beige, available_size, setProductImages, id }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const handleSelectColor = (item) => {
    setSelectedColor(item.id);
    setProductImages(item.original_images);
  };
  const handleSizeChange = (item) => {
    setSelectedSize(item.size);
  };
  const addItemToCart = () => {

  };
  return (
    <>
      <div className="title-secondary mb-2">COLOR-BEIGE</div>
      <div className="">
        {color_beige &&
          color_beige.length > 0 &&
          color_beige.map((data, index) => {
            return (
              <div
                onClick={
                  () => handleSelectColor(data)
                  // setProductImages(data.original_images)
                }
                style={{
                  backgroundImage: `url(${data.thumbnail})`,
                  width: "100px",
                  height: "100px",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                key={index}
              >
                {!data.available && <div>sold out</div>}
              </div>
            );
          })}
      </div>
      <div className="">
        <div className="">SELECT SIZE</div>
        <div>SIZE GUIDE</div>
      </div>
      <div>
        {available_size &&
          available_size.length > 0 &&
          available_size.map((data, index) => {
            console.log(data, "size thing in map");
            return (
              <div
                onClick={() => handleSizeChange(data)}
                className={`${
                  selectedSize === ""
                    ? data.preffered_size==true
                      ? "border border-primary"
                      : ""
                    : selectedSize === data.size
                    ? "border border-primary"
                    : ""
                }`}
                key={index}
              >
                {data.size}
                {data.items_left < 3 && <div>2 left</div>}
              </div>
            );
          })}
      </div>
      <Button onClick={() => addItemToCart()} variant="success">
        ADD TO CART
      </Button>
    </>
  );
}

export default SelectToCart;
