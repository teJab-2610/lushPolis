import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import FetchCareGuide from './fetchCareGuide.jsx';
import FetchFAQ from './fetchFAQ.jsx';
import './PlantSearch.css';
import Navbar from '../components/Navbar.jsx';
import bggg from '../../assets/images/jamescameron.jpg';

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
        const apiUrl = `http://localhost:3001/plants/search/${plantName}`;
        const response = await axios.get(apiUrl, {
            baseURL: 'http://localhost:3001',
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


    // <div class=" searchp p-1 bg-light rounded rounded-pill shadow-sm" style={{ width: '35rem'}} >
    //         <div class="input-group">
    //           <div class="input-group-prepend">
    //             <button id="button-addon2" type="submit" class="btn btn-link text-warning"><img src={si} style={{    width: '1.2rem'}}></img></button>
    //           </div>
    //           <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon2" class="form-control border-0 bg-light"/>
    //         </div>
    //       </div>

    return (
        <><Navbar/>
        <div className="search-plant" style={{padding:'6rem'}}>
            <h2 className="plant-h2">Plant Search</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Plant Name:
                    <input
                        type="text"
                        value={plantName}
                        onChange={handleInputChange}
                        placeholder="Enter the plant name" aria-describedby="button-addon2" class="form-control bg-light"
                        style={{ width: '35rem'}}
                    />
                </label>
                <button className="Plant-search-button" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="search-results">
                    {response && (
                        <div className="plant-details" style={{color:'green'}}>
                            <br />
                            <br />
                            <img
                                src={response.image || 'Loading...'}
                                alt="{response.type || 'Plant data unavailable'}"
                                className="plant-top-center-image"
                            />
                            <br />
                            <p ><strong>Common Names:</strong> {response.commonName || 'Plant data unavailable'}</p>
                            <p><strong>Scientific Name:</strong> {response.scientificName?.join(', ') || 'Plant data unavailable'}</p>
                            <p><strong>Origin:</strong> {response.origin?.join(', ') || 'Plant data unavailable'}</p>
                            <p><strong>Other Names:</strong> {response.other_name || 'Plant data unavailable'}</p>
                            <p><strong>Dimension:</strong> {response.dimension || 'Plant data unavailable'}</p>
                            <p><strong>Plant Anatomy:</strong> {response.plant_anatony || 'Plant data unavailable'}</p>
                            <p><strong>Propagation:</strong> {response.propagation || 'Plant data unavailable'}</p>
                            <p><strong>Watering:</strong> {response.watering || 'Plant data unavailable'}</p>
                            <p><strong>Type:</strong> {response.type || 'Plant data unavailable'}</p>
                            <p><strong>Depth Watering Requirement:</strong> {response.depth_watering_requirement || 'Plant data unavailable'}</p>
                            <p><strong>Volume Water Requirement:</strong> {response.volume_water_requirement?.join(', ') || 'Plant data unavailable'}</p>
                            <p><strong>Sunlight:</strong> {response.sunlight?.join(', ') || 'Plant data unavailable'}</p>
                            <p><strong>Maintenance:</strong> {response.maintenance || 'Plant data unavailable'}</p>
                            <p><strong>Growth Rate:</strong> {response.growth_rate || 'Plant data unavailable'}</p>
                            <p><strong>Care Level:</strong> {response.care_level || 'Plant data unavailable'}</p>
                            <p><strong>Pruning Month:</strong> {response.pruning_month || 'Plant data unavailable'}</p>
                            <p><strong>Pruning Count:</strong> {response.pruning_count || 'Plant data unavailable'}</p>
                            <p><strong>Pruning Interval:</strong> {response.pruning_interval || 'Plant data unavailable'}</p>
                            <p><strong>Medicinal:</strong> {response.medicinal ? 'Yes' : 'No'}</p>
                            <p><strong>Poisonous to Humans:</strong> {response.poisonous_to_humans || 'Plant data unavailable'}</p>
                            <p><strong>Poisonous to Pets:</strong> {response.poisonous_to_pets || 'Plant data unavailable'}</p>
                            <p><strong>Description:</strong> {response.description || 'Plant data unavailable'}</p>
                            <br />
                            <button className='open-careguide' onClick={openCareGuideModal}>Care Guide</button>
                            <br />
                            <button className='open-faq' onClick={openFAQModal}>FAQ</button>
                                                </div>
                    )}
                </div>
            )}
            <Modal
                isOpen={isCareGuideOpen}
                onRequestClose={closeCareGuideModal}
            >
                <FetchCareGuide plantName={plantName} />
                <button className='close-careguide' onClick={closeCareGuideModal}>Close</button>
            </Modal>

            {/* FAQ Modal */}
            <Modal
                isOpen={isFAQOpen}
                onRequestClose={closeFAQModal}
            >
                <FetchFAQ plantName={plantName} />
                <button className='close-faq' onClick={closeFAQModal}>Close</button>
            </Modal>
        </div>
        </>
    );
}

export default SearchPlant;


