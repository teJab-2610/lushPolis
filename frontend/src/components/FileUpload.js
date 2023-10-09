import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [isFileSelected, setIsFileSelected] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setIsFileSelected(true); // Set to true when a file is selected
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('image', file);

            const response = await axios.post('/plants/identification', formData, {
                baseURL: 'http://localhost:4000',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const responseData = response.data;

            if (responseData.isplantprobability < 0.5) {
                setResponse("High chance that the image doesn't contain a plant. Try from another angle or take a picture of a plant.");
            } else {
                setResponse(responseData.suggestions);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const plantlist = () => {
        const plantlist = (
            <ul className="plant-list">
                {response && response.map((plant, index) => (
                    <li key={index} onClick={() => handlePlantItemClick(plant)}>
                        <div className="plant-item">
                            <img src={plant.image} alt={plant.name} />
                            <div className="plant-info">
                                <p>Name: {plant.name}</p>
                                <p>Probability: {plant.probability}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
        setResponse(plantlist);
    };
    const handleBackClick = () => {
        setSelectedPlant(null);
    };


    const handlePlantItemClick = (plant) => {
        // Toggle the expanded property to show/hide details
        plant.expanded = !plant.expanded;

        // Create JSX elements to display the details
        const plantDetails = (
            <div>
                <p><strong>Name:</strong> {plant.name}</p>
                {plant.common_names && (
                    <p><strong>Common Names:</strong> {plant.common_names.join(', ')}</p>
                )}
                <p><strong>Taxonomy:</strong></p>
                <ul>
                    <li><strong>Class:</strong> {plant.taxonomy.class}</li>
                    <li><strong>Genus:</strong> {plant.taxonomy.genus}</li>
                    <li><strong>Order:</strong> {plant.taxonomy.order}</li>
                    <li><strong>Family:</strong> {plant.taxonomy.family}</li>
                    <li><strong>Phylum:</strong> {plant.taxonomy.phylum}</li>
                    <li><strong>Kingdom:</strong> {plant.taxonomy.kingdom}</li>
                </ul>
                <p><strong>Description:</strong> {plant.description.value}</p>
                <p><strong>Wikipedia URL:</strong> <a href={plant.wikipedia_url} target="_blank" rel="noopener noreferrer">{plant.wikipedia_url}</a></p>
                <button className="moredetails">More Details</button>
                <button className="careguide">Care-Guide</button>
                <button className="FAQ">FAQ</button>
                <button onClick={() => handleBackClick()}>Back</button>
                <br />
                <br />
            </div>
        );
        // Update the state to trigger a re-render with the details
        setSelectedPlant(
            <div>
                <img src={plant.image} alt={plant.name} className="selected-plant-image" />
                {plantDetails}
            </div>
        );
    };

    return (
        <div className="file-upload-container">
            <h2>Upload an Image for Plant Identification</h2>
            <label htmlFor="file-input" className={isFileSelected ? 'file-selected button-like' : 'button-like'}>
                {isFileSelected ? 'File Selected' : 'Choose a File'}
            </label>
            <input
                type="file"
                id="file-input"
                accept="image/*"
                onChange={handleFileChange}
            />
            <br />
            <button onClick={handleSubmit} disabled={isLoading}>
                Submit
            </button>
            <div className="response">
                {isLoading ? <p>Loading...</p> : (
                    // Render the list of plants here
                    selectedPlant ? (
                        selectedPlant
                    ) : response ? (
                        <ul className="plant-list">
                            {response.map((plant, index) => (
                                <li key={index} onClick={() => handlePlantItemClick(plant)} className="plant-item">
                                    <div>
                                        <img src={plant.image} alt={plant.name} />
                                    </div>
                                    <div className="plant-info">
                                        <p>Name: {plant.name}</p>
                                        <p>Probability: {plant.probability}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default FileUpload;
