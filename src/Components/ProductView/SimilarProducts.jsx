import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../Global/ProductCard";

function SimilarProducts() {
  return (
    <section>
      <Container>
        <h2 className="title-primary text-uppercase text-center mb-3">
          Similar products
        </h2>
        <Row>
          <Col sm={4}>
            <ProductCard thumbnail="https://picsum.photos/seed/picsum/1200/768"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SimilarProducts;