import React from "react";
import { HeartFill, StarFill, SuitHeart } from "react-bootstrap-icons";

function PricingDetails({original_price,total_ratings,product_name,  applied_off,  avg_rating,  is_favorite}) {
  // const dispatch = useDispatch()

 
  
  function getTheOfferPrice(original, off){
       if (typeof original !== 'number' || typeof off !== 'number') {
        return "Invalid input. Please provide valid numbers.";
    }
    const discountAmount = (original * off) / 100;
    const offerPrice = original - discountAmount;
    return offerPrice;
  }
  return (
    <article className="mb-4">
    <div className="d-flex justify-content-between mb-1">
      <div>
        <span className="title-primary d-inline-block me-2">₹{getTheOfferPrice(original_price,applied_off)}</span>{" "}
        <del className="text-secondary d-inline-block me-2 font-medium">₹{original_price}</del>
        {applied_off&&applied_off!==0&&<span className="color-green d-inline-block font-medium">{applied_off}% off</span>}
      </div>
      <div>
        {is_favorite?<HeartFill className="text-danger" />: <SuitHeart />}
      </div>
    </div>
    <div className="title-secondary text-secondary">{product_name}</div>
    <div className="d-flex">
      <div className="para-sm"><StarFill className="text-warning"/> <span className="border-end pe-1 font-medium text-dark">{avg_rating}</span> <span className="text-secondary">{total_ratings}</span></div>
    </div>
    </article>
  );
}

export default PricingDetails;
