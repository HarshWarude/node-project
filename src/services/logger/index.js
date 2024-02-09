const bunyan = require('bunyan');
/***********************************
 * SERVICE FOR HANDLOING APP LOGGING
 ***********************************/

//LOGGER INSTANCE//
const logger = bunyan.createLogger({
    name: 'structure',
    streams: [{
        level: 'trace',
        stream: process.stdout
    }]  
});

class Logger {
    constructor(componentName){
        this._componentName = componentName;    
    }
    getChildLogger(){
        return logger.child({
            component: this._componentName
        });
    }
    static getApplevelInstance(loggerName){
        if(!loggerName){
            return logger;
        }else{
            return new logger(loggerName).getChildLogger();
        }
    }
}

module.exports = Logger;