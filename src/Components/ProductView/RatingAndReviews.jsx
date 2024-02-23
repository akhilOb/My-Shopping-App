import React, { useState } from "react";
// import Rating from 'material-ui-rating'
import ProgressBar from "react-bootstrap/ProgressBar";
import { PatchCheckFill } from "react-bootstrap-icons";


function RatingAndReviews() {
  const [rating, setRating] = useState(4);
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value: number, index: number) => console.log(value, index)
  return (
    <>
      <div className="title-secondary mb-2">CUSTOMER RATINGS AND REVIEWS</div>
      <div>
        <div>4.0</div>
        <span>84 reviews</span>
        {/* <Rating value={3} max={5} /> */}
      </div>
      <div className="border-bottom">
        <div>
          <span>5</span>
          <ProgressBar className="progress-height" variant="success" now={60} />
          <span>51</span>
        </div>
        <div>
          <span>4</span>
          <ProgressBar className="progress-height" variant="success" now={60} />
          <span>11</span>
        </div>
        <div>
          <span>3</span>
          <ProgressBar className="progress-height" variant="success" now={60} />
          <span>10</span>
        </div>
        <div>
          <span>2</span>
          <ProgressBar className="progress-height" variant="success" now={60} />
          <span>5</span>
        </div>
        <div>
          <span>1</span>
          <ProgressBar className="progress-height" variant="success" height={4} now={60} />
          <span>2</span>
        </div>
      </div>

      <div>
        <div>
          <div>Shravya BR <span><PatchCheckFill />Verified Buyer</span></div>
          <div>7 Months</div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default RatingAndReviews;
