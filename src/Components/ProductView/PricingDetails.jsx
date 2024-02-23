import React, { useEffect } from "react";
import { HeartFill, StarFill, SuitHeart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from 'react-redux'
import  {getProductDetails} from "../../redux/productDetailsSlice/productDetailsSlice";

function PricingDetails({original_price,total_ratings,product_name,  applied_off,  avg_rating,  is_favorite}) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductDetails())
  }, [])
  
  function getTheOfferPrice(original, off){
       if (typeof original !== 'number' || typeof off !== 'number') {
        return "Invalid input. Please provide valid numbers.";
    }
    const discountAmount = (original * off) / 100;
    const offerPrice = original - discountAmount;
    return offerPrice;
  }
  return (
    <>
    <div className="d-flex justify-content-between mb-1">
      <div>
        <span className="title-primary d-inline-block me-2">₹{getTheOfferPrice(original_price,applied_off)}</span>{" "}
        <del className="text-secondary d-inline-block me-2">₹{original_price}</del>
        {applied_off&&applied_off!==0&&<span className="text-success d-inline-block">{applied_off}% off</span>}
      </div>
      <div>
        {is_favorite?<HeartFill className="text-danger" />: <SuitHeart />}
      </div>
    </div>
    <div className="title-secondary text-secondary">{product_name}</div>
    <div className="d-flex">
      <div className="para-sm"><StarFill className="text-warning"/> <span className="border-end pe-1 font-medium text-dark">{avg_rating}</span> <span className="text-secondary">{total_ratings}</span></div>
    </div>
    </>
  );
}

export default PricingDetails;
