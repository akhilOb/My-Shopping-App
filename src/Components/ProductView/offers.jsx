import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Offers({ applicablee_offers }) {
  // console.log(applicablee_offers, "applicablee_offers");
  return (
    <>
      <h4 className="title-secondary mb-2">OFFERS</h4>
      <Swiper
        spaceBetween={15}
        slidesPerView={1.3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="pb-4"
      >
        {applicablee_offers &&
          applicablee_offers.length > 0 &&
          applicablee_offers.map((data, index) => {
            // console.log(data, "KOKOKOK");
            return (
              <SwiperSlide key={index}>
                <div className="d-flex align-items-center justify-content-between  rounded p-2 offer-card">
                  <div className="d-flex align-items-center">
                    <div
                      style={{ height: "20px", width: "20px" }}
                      className="me-2"
                    >
                      <img
                        src="./images/icons/offerPercentage.svg"
                        alt="offerPercentage"
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <div className="color-blue font-bold para-sm">
                        {data.title}
                      </div>
                      <div className="para-sm text-secondary font-medium">
                        {data.description}
                      </div>
                    </div>
                  </div>
                  <div className="ms-4">
                    <div className="para-sm color-blue font-medium"> 1/3</div>
                    <div>...</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default Offers;
