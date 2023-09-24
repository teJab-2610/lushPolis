const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

const connecctDB = require('./config/db.config');
connecctDB();

require('./routes/auth.route')(app);
require('./routes/user.route')(app);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});


