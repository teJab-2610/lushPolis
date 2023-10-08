const express = require('express');
const {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout, getPlant, getPlantdetails} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

//get a workout


router.get('/plant',getPlant);

// router.get('/plant/:access_token',getPlantdetails);

router.get('/:id', getWorkout);

//post a new request
router.post('/', createWorkout);

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout);



module.exports = router;