const express = require('express');
const {getPlant, searchPlant, fetchcareGuidedetails, fetchFAQ} = require('../controllers/plantcontroller');

const router = express.Router();

// router.get('/',getPlants);

router.post('/identification', getPlant);

router.get('/search/:plantName',searchPlant);

router.get('/careguide/:plantName',fetchcareGuidedetails);

router.get('/faq/:plantName',fetchFAQ);

module.exports = router;