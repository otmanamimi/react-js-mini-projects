import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="img" />
      <span className="tour-price">${price}</span>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
