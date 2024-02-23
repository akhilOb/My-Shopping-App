import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../Global/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productDetailsSlice/productDetailsSlice";

function SimilarProducts() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productDetails.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <section>
      <Container>
        <h2 className="title-primary text-uppercase text-center mb-3">
          Similar products
        </h2>
        <Row>
          {allProducts &&
            allProducts.length > 0 &&
            allProducts.map((data, index) => {
              return (
                <Col key={index} sm={6} lg={4}>
                  <ProductCard data={data} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
}

export default SimilarProducts;
