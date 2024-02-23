import React from "react";

function Offers({ applicablee_offers }) {
  // console.log(applicablee_offers, "applicablee_offers");
  return (
    <>
      <div className="title-secondary mb-2">OFFERS</div>

      <div>
        {applicablee_offers &&
          applicablee_offers.length > 0 &&
          applicablee_offers.map((data, index) => {
            // console.log(data, "KOKOKOK");
            return (
              <div key={index}>
                <div>
                  <img src="/icons/offerPercentage.svg" alt="offerPercentage" />
                </div>
                <div>
                  <div>{data.title}</div>
                  <div>{data.description}</div>
                </div>
                <div>
                  <div> 1/3</div>
                  <div>...</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Offers;
