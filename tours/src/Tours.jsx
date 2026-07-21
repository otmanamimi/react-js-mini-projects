import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour, index) => {
          return <Tour key={index} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
