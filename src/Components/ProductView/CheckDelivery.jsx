import React from "react";

function CheckDelivery() {
  return (
    <>
      <div className="title-secondary mb-2 text-uppercase">Check for availability</div>
      <div class="input-group mb-3 offer-card rounded ">
        <input
          type="text"
          class="form-control border-0"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append border-0">
          <button class="btn  border-0 color-blue font-medium" type="button">
            Check
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckDelivery;
