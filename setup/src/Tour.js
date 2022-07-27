import React, { useState } from 'react';

const Tour = (tour) => {
  const { id, name, info, image, price, removeRecord } = tour;
  const [toggle, setToggle] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <div>
          {toggle ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? 'show-less' : 'show-more'}
          </button>
        </div>
        <div>
          <button
            className="delete-btn"
            onClick={() => {
              removeRecord(id);
            }}
          >
            Not Interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
