const axios = require('axios');

async function fetchFAQ(plantName) {
  try {
    const apiUrl = `http://localhost:4000/faq/${plantName}`; // Update with your backend URL
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error fetching FAQ data');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = fetchFAQ;
