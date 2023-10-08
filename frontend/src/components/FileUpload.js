import React, { useState } from 'react';
import axios from 'axios';
import PlantPopup from './PlantPopup';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post('/plants/identification', formData, {
        baseURL: 'http://localhost:4000',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Convert the JSON response to a string for rendering
      const responseDataString = JSON.stringify(response.data, null, 2);
      console.log(responseDataString);
      setResponse(responseDataString);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const openPopup = (plant) => {
    setSelectedPlant(plant);
  };

  const closePopup = () => {
    setSelectedPlant(null);
  };

  return (
    <div className="file-upload-container">
      <h2>Upload an Image for Plant Identification</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div className="response">
        <h3>Response:</h3>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default FileUpload;
