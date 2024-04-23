const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => console.log('Connected to Mongo successfully!'))
        .catch(err => console.error('Failed to connect to Mongo:', err));
};

module.exports = connectToMongo;