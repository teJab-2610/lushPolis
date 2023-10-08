import React, { useState } from 'react';
import axios from 'axios';
//import csss
import './FileUpload.css';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    var plantsList = null;
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

            // Check if isPlantProbability is greater than 0.5
            if (responseData.isplantprobability < 0.5) {
                // setPlants([]); // Clear the plant list
                // setSelectedPlant(null);
                setResponse("High chance that the image doesn't contain a plant. Try from another angle or take a picture of a plant.");
            } else {
                // Display a list of plant suggestions
                plantsList = (
                    <div>
                        <h3>Plant Suggestions:</h3>
                        <ul>
                            {responseData.suggestions.map((plant, index) => (
                                <li key={index}>
                                    <div onClick={() => handlePlantItemClick(plant)}>
                                        <img src={plant.image} alt={plant.name} />
                                        <div>
                                            <p>Name: {plant.name}</p>
                                            <br />
                                            <p>Probability: {plant.probability}</p>
                                        </div>
                                    </div>
                                    {plant.expanded && (
                                        <div>
                                            {/* Display additional plant details here */}
                                            {/* <p>Common Names: {plant.common_names.join(', ')}</p> */}
                                            {/* Add more details as needed */}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>);
                setResponse(plantsList);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setIsLoading(false); // Set loading state to false when done
        }
    };
    // Conditional rendering based on isLoading
    // if (isLoading) {
    //     plantsList= (
    //         <div className="file-upload-container">
    //             <h2>Upload an Image for Plant Identification</h2>
    //             <input type="file" accept="image/*" onChange={handleFileChange} />
    //             <button onClick={handleSubmit} disabled={isLoading}>
    //                 Submit
    //             </button>
    //             <div className="response">
    //                 <h3>Loading...</h3>
    //             </div>
    //         </div>
    //     );
    //     setResponse(plantsList);
    // } else {
    //     plantsList = (
    //         <div className="file-upload-container">
    //             <h2>Upload an Image for Plant Identification</h2>
    //             <input type="file" accept="image/*" onChange={handleFileChange} />
    //             <button onClick={handleSubmit}>Submit</button>
    //             <div className="response">
    //                 <h3>Response:</h3>
    //                 {response}
    //             </div>
    //         </div>
    //     );
    //     setResponse(plantsList);
    // }


const handlePlantItemClick = (plant) => {
    // Toggle the expanded property to show/hide details
    plant.expanded = !plant.expanded;

    // Create JSX elements to display the details
    const plantDetails = (
        <div>
            <button onClick={() => handleBackClick()}>Back</button>
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
        </div>
    );

    // Update the state to trigger a re-render with the details
    setResponse(plantDetails);
};


const handleBackClick = () => {
    // Clear the details and return to the list of plant suggestions
    setResponse(plantsList);
};


return (
    <div className="file-upload-container">
        <h2>Upload an Image for Plant Identification</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Submit</button>
        <div className="response">
            <h3>Response:</h3>
            {response}
        </div>
    </div>
);

}
export default FileUpload;
