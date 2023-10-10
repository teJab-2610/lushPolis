import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import FetchCareGuide from './fetchCareGuide.js';
import FetchFAQ from './fetchFAQ.js';
import './PlantSearch.css';

function SearchPlant() {
    const [plantName, setPlantName] = useState('');
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isCareGuideOpen, setIsCareGuideOpen] = useState(false); // State for Care Guide modal
    const [isFAQOpen, setIsFAQOpen] = useState(false); // State for FAQ modal

    const handleInputChange = (e) => {
        setPlantName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const plantData = await fetchPlantData(plantName);
            setResponse(plantData);
        } catch (error) {
            console.error('Error searching plant:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPlantData = async (plantName) => {
        const apiUrl = `http://localhost:4000/plants/search/${plantName}`;
        const response = await axios.get(apiUrl, {
            baseURL: 'http://localhost:4000',
        });
        return response.data;
    };

    const openCareGuideModal = () => {
        setIsCareGuideOpen(true);
    };

    // Function to close Care Guide modal
    const closeCareGuideModal = () => {
        setIsCareGuideOpen(false);
    };

    // Function to open FAQ modal
    const openFAQModal = () => {
        setIsFAQOpen(true);
    };

    // Function to close FAQ modal
    const closeFAQModal = () => {
        setIsFAQOpen(false);
    };

    return (
        <div className="search-plant">
            <h2>Plant Search</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Plant Name:
                    <input
                        type="text"
                        value={plantName}
                        onChange={handleInputChange}
                    />
                </label>
                <button className="search-button" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="search-results">
                    {response && (
                        <div className="plant-details">
                            <br />
                            <br />
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
                            <button onClick={openCareGuideModal}>Care Guide</button>
                            <br />
                            <button onClick={openFAQModal}>FAQ</button>
                        </div>
                    )}
                </div>
            )}
            <Modal
                isOpen={isCareGuideOpen}
                onRequestClose={closeCareGuideModal}
            >
                <FetchCareGuide plantName={plantName} />
                <button onClick={closeCareGuideModal}>Close</button>
            </Modal>

            {/* FAQ Modal */}
            <Modal
                isOpen={isFAQOpen}
                onRequestClose={closeFAQModal}
            >
                <FetchFAQ plantName={plantName} />
                <button onClick={closeFAQModal}>Close</button>
            </Modal>
        </div>
    );
}

export default SearchPlant;


