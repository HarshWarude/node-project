const mongoose = require('mongoose');
const config = require('../../config/environment');
const log = require('../../services/logger').getApplevelInstance();
mongoose.Promise = global.Promise;
/********************************************************
 * UTILITY METHOD FOR HANDLING SERVER DATABASE CONNECTION
 ********************************************************/
module.exports = (databaseUrl) => {
    try {
        let options = { userNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false };
        letmongoUrl = databaseUrl || config.databaseUrl;
        //Handling Mongoose Connect function
        mongoose.connect(mongoUrl, options);
        /** 
		* Adding Mongoose Event Listeners
		*/
        mongoose.connection.on('connecting', function(){
            log.info('trying to establish a conection with the database');
        });

        mongoose.connection.on('connected', function(){
            log.info('Database connection established sucessfully');
        });

        mongoose.connection.on('error', function(err){
            log.info('Database connection failed with error::', err);
        });

        mongoose.connection.on('disconnected', function(){
            log.info('Database connection closed');
        });
    }
    catch (error) {
        log.error('failed to establish connection with database::', error);
        return Promise.reject(error);
    }
}