require("dotenv").config();
const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connection.once('open',() =>{
    console.log('conected to DB');
});
mongoose.connection.on('error', (error) =>{
    console.log(error);

});

const conectedDB = async () => {
    await mongoose.conect(MONGODB_URL, {
        useNewUrParser: true,
        dbName: process.env.DB_NAME,
    });
};

const disconnectDB = async () => {
    await mongoose.disconnect();
};

module.exports = {conectDB, disconnectDB};
