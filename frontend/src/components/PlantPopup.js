import React from 'react';
import './plantPopup.css'; // Import the CSS file

function PlantPopup({ plant, onClose }) {
  const {
    name,
    image,
    common_names,
    description,
    taxonomy,
    wikipedia_url,
  } = plant;

  return (
    <div className="plant-popup">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          Close
        </button>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <div className="plant-details">
          <p>
            <strong>Common Names:</strong> {common_names.join(', ')}
          </p>
          <p>
            <strong>Description:</strong> {description.value}
          </p>
          <p>
            <strong>Taxonomy:</strong> {taxonomy.class} &gt; {taxonomy.order} &gt; {taxonomy.family}
          </p>
          <p>
            <a href={wikipedia_url} target="_blank" rel="noopener noreferrer">
              Wikipedia Page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlantPopup;
