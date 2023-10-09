import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchMoreDetails({ plantName }) {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchmoredetails = async (plantName) => 
        {
            console.log('plantName', plantName);
            try {
                const apiUrl = `http://localhost:4000/plants/search/${plantName}`;
                console.log(apiUrl);
                const response = await axios.get(apiUrl, {
                    baseURL: 'http://localhost:4000',
                });

                setResponse(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching More Details:', error);
                setLoading(false);
            }
        };

        fetchmoredetails(plantName);
    }, [plantName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="search-results">
            {response && (
                <div className="plant-details">
                    <img
                        src={response.image || 'placeholder-image-url'}
                        alt={response.type || 'N/A'}
                        className="top-center-image"
                    />
                    <p><strong>Common Names:</strong> {response.commonName || 'N/A'}</p>
                    <p><strong>Scientific Name:</strong> {response.scientificName?.join(', ') || 'N/A'}</p>
                    <p><strong>Origin:</strong> {response.origin?.join(', ') || 'N/A'}</p>
                    <p><strong>Other Names:</strong> {response.other_name || 'N/A'}</p>
                    <p><strong>Dimension:</strong> {response.dimension || 'N/A'}</p>
                    <p><strong>Plant Anatomy:</strong> {response.plant_anatony || 'N/A'}</p>
                    <p><strong>Propagation:</strong> {response.propagation || 'N/A'}</p>
                    <p><strong>Watering:</strong> {response.watering || 'N/A'}</p>
                    <p><strong>Type:</strong> {response.type || 'N/A'}</p>
                    <p><strong>Depth Watering Requirement:</strong> {response.depth_watering_requirement || 'N/A'}</p>
                    <p><strong>Volume Water Requirement:</strong> {response.volume_water_requirement?.join(', ') || 'N/A'}</p>
                    <p><strong>Sunlight:</strong> {response.sunlight?.join(', ') || 'N/A'}</p>
                    <p><strong>Maintenance:</strong> {response.maintenance || 'N/A'}</p>
                    <p><strong>Growth Rate:</strong> {response.growth_rate || 'N/A'}</p>
                    <p><strong>Care Level:</strong> {response.care_level || 'N/A'}</p>
                    <p><strong>Pruning Month:</strong> {response.pruning_month || 'N/A'}</p>
                    <p><strong>Pruning Count:</strong> {response.pruning_count || 'N/A'}</p>
                    <p><strong>Pruning Interval:</strong> {response.pruning_interval || 'N/A'}</p>
                    <p><strong>Medicinal:</strong> {response.medicinal ? 'Yes' : 'No'}</p>
                    <p><strong>Poisonous to Humans:</strong> {response.poisonous_to_humans || 'N/A'}</p>
                    <p><strong>Poisonous to Pets:</strong> {response.poisonous_to_pets || 'N/A'}</p>
                    <p><strong>Description:</strong> {response.description || 'N/A'}</p>
                    <br />
                </div>
            )}
        </div>
    );
}

export default FetchMoreDetails;
