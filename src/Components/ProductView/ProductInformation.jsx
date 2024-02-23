import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FileEarmarkText, Truck, ArrowClockwise } from "react-bootstrap-icons";
function ProductInformation({ product_informations }) {
  return (
    <div className="my-5">
      <div className="title-secondary mb-2">PRODUCT INFORMATION</div>
      <Accordion defaultActiveKey="" >
        {product_informations &&
          product_informations.length > 0 &&
          product_informations.map((data, index) => {
            return (
              <Accordion.Item key={index} eventKey="0" className={`border-0 ${index===product_informations.length -1 ? "":"border-bottom"} ps-0`}>
                <Accordion.Header className="bg-white ps-0">
                  <div className="d-flex">
                    <div>
                      {data.icon === 1 ? (
                        <FileEarmarkText className="title-primary text-dark" />
                      ) : data.icon === 2 ? (
                        <Truck className="title-primary text-dark" />
                      ) : data.icon === 3 ? (
                        <ArrowClockwise className="title-primary text-dark" />
                      ) : (
                        <FileEarmarkText className="title-primary text-dark" />
                      )}
                    </div>
                    <div className="ms-3">
                      <h1 className="para-sm text-dark font-medium mb-1">
                        {data.title}
                      </h1>
                      <p className="para-xs text-secondary mb-0">
                        data.sub_title
                      </p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="ps-0 pt-0 para-sm">
                  {data.description}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
      </div>
  );
}

export default ProductInformation;
