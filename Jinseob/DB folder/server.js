const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

mongoose.connect(MONGODB_URL, { useNewUrlParser: true }, (err) => {
    if (error) {
        console.log('Unable to connect to database...');
    }
    else {
        console.log('Connected to DB');
    }

});
