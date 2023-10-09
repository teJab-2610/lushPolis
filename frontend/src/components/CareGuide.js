import React, { useEffect, useState } from 'react';
import { fetchCareGuide } from './fetchCareGuide.js'

function CareGuide({ plantName }) {
  const [careGuideData, setCareGuideData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCareGuide(plantName);
        setCareGuideData(data);
      } catch (error) {
        console.error('Error fetching Care Guide:', error);
      }
    };

    fetchData();
  }, [plantName]);

  return (
    <div className="care-guide">
      <h3>Care Guide for {plantName}</h3>
      {careGuideData ? (
        <div>
          {/* Display care guide data here */}
          {/* For example: */}
          <p>{careGuideData.description}</p>
          <p>{careGuideData.tips}</p>
        </div>
      ) : (
        <p>Loading Care Guide...</p>
      )}
    </div>
  );
}

export default CareGuide;
