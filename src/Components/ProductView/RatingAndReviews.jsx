import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { PatchCheckFill } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";

function RatingAndReviews({ ratings, top_reviews }) {
  const ratingxs = [4, 3, 5, 2, 4];
  return (
    <>
      <div className="title-secondary mb-2">CUSTOMER RATINGS AND REVIEWS</div>

      <div className="border-bottom my-4 pb-4">
        <Row>
          <Col xs={4}>
            <div className="text-center">
              <div className="title-primary font-bold text-dark mb-0">
                {ratings && ratings.avg_rating}
              </div>
              <span className="title-secondary font-bold text-secondary mb-2">
                {ratings && ratings.total_ratings} reviews
              </span>

              {/* <Rating value={3} max={5} /> */}
            </div>
          </Col>
          <Col xs={8}>
            {ratings &&
              ratings.ratings &&
              ratings.ratings.length > 0 &&
              ratings.ratings.map((data, index) => {
                return (
                  <Row key={index} className="align-items-center">
                    <Col xs={1} className="para-sm font-bold text-dark">
                      {data.name}
                    </Col>
                    <Col xs={10}>
                      <ProgressBar
                        className="progress-height"
                        variant="success"
                        now={data.value}
                      />
                    </Col>
                    <Col
                      xs={1}
                      className="para-sm font-bold text-secondary text-end"
                    >
                      {data.value}
                    </Col>
                  </Row>
                );
              })}
          </Col>
        </Row>
      </div>

      {/* <div>
        {top_reviews &&
          top_reviews.length > 0 &&
          top_reviews.map((data, index) => {
            return (
              <div>
                <div>
                  {data.name}
                  <span>
                    <PatchCheckFill />
                    {data.isVerified&&"Verified Buyer"}
                  </span>
                </div>
                <div>{data.date}</div>
                <div>{data.review}</div>
                {data.photos&&data.photos.length>0&&data.photos.map((data, index) => {
            return (
              <div
                className="rounded selected-item position-relative"
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
            );
          })}
        <div></div>
      </div> */}
    </>
  );
}

export default RatingAndReviews;
