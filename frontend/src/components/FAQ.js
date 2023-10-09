import React, { useEffect, useState } from 'react';
import fetchFAQ from './fetchFAQ';

function FAQ({ plantName }) {
  const [faqData, setFAQData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFAQ(plantName);
        setFAQData(data);
      } catch (error) {
        console.error('Error fetching FAQ:', error);
      }
    };

    fetchData();
  }, [plantName]);

  return (
    <div className="faq">
      <h3>FAQ for {plantName}</h3>
      {faqData ? (
        <div>
          {/* Display FAQ data here */}
          {/* For example: */}
          <p>{faqData.questions}</p>
          <p>{faqData.answers}</p>
        </div>
      ) : (
        <p>Loading FAQ...</p>
      )}
    </div>
  );
}

export default FAQ;
