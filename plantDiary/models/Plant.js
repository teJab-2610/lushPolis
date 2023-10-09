// models/Plant.js

const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    planted_date: {
        type: Date
    },
    location: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Plant = mongoose.model('plant', PlantSchema);