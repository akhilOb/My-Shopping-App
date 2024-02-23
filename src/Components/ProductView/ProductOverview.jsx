import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from 'react-router-dom';

import ImageWrapper from "../Global/ImageWrapper";
import PricingDetails from "./PricingDetails";
import Offers from "./offers";
import SelectToCart from "./SelectToCart";
import CheckDelivery from "./CheckDelivery";
import ProductInformation from "./ProductInformation";
import RatingAndReviews from "./RatingAndReviews";
import  {getProductDetails} from "../../redux/productDetailsSlice/productDetailsSlice";

function ProductOverview() {
  const dispatch = useDispatch()
  const params = useParams();
  const productDetails = useSelector(
    (state) => state.productDetails.productDetails
  );
  const productDetailsLoading = useSelector(
    (state) => state.productDetails.isLoading
  );
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    dispatch(getProductDetails(params.productID))
  }, [params.productID])

  useEffect(() => {
 
    productDetails &&
      productDetails.images &&
      setProductImages(productDetails.images);
  }, [productDetails]);

  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={7}>
          <Row className="g-1">
            {productImages &&
              productImages.length > 0 &&
              productImages.map((data, index) => {
                return (
                  <Col xs={6} key={index}>
                    <ImageWrapper imageUrl={data} />
                  </Col>
                );
              })}
          </Row>
        </Col>
        <Col md={5}>
          <PricingDetails
            original_price={productDetails.original_price}
            total_ratings={productDetails.total_ratings}
            product_name={productDetails.original_price}
            applied_off={productDetails.applied_off}
            avg_rating={productDetails.avg_rating}
            is_favorite={productDetails.is_favorite}
          />
          <Offers applicablee_offers={productDetails.applicablee_offers} />
          <SelectToCart
            setProductImages={setProductImages}
            color_beige={productDetails.color_beige}
            available_size={productDetails.available_size}
            id={productDetails.id}
          />
          <CheckDelivery />
          <ProductInformation
            product_informations={productDetails.product_informations}
          />
          <RatingAndReviews ratings={productDetails.ratings} top_reviews={productDetails.top_reviews} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductOverview;
