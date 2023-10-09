const axios = require('axios');

async function fetchCareGuide(plantName) {
  try {
    const apiUrl = `http://localhost:4000/careguide/${plantName}`; // Update with your backend URL
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error fetching Care Guide data');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {fetchCareGuide};
