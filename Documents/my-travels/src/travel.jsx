import React from 'react';
import './Travel.css' 

const Travels = ({ destination, country, image, distance }) => (
    <div className="center">
    <figure>
      <img src={image} alt={image} />
      <figcaption>
        <blockquote>{destination}</blockquote>
        <blockquote>{country}</blockquote>
        <blockquote>{distance}</blockquote>
      </figcaption>
    </figure>
    </div>
  );
export default Travels;