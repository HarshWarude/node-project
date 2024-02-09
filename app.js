'use strict';
const server = require('./src/server');
const log = require('./src/services/logger').getApplevelInstance();
/*************************************************************************************/
/* START PROCESS UNHANDLED METHODS */
/*************************************************************************************/

process.on('unhandledRejection', (reason, p) => {
	log.error('Unhandle Rejection at:', p, 'reasons:', reason);
	log.error(`API server exiting due to unhandledRejection`);
	process.exit(1);
})
process.on('uncaughtException', (err) => {
	log.error('Uncaught Exception:', err);
	log.error(`API server exiting due to uncaughtException...`);
	process.exit(1);
});
/*************************************************************************************/
/* END PROCESS UNHANDLED METHODS */
/*************************************************************************************/

/**
 * START THE SERVER
 */
const appServer = new server();
appServer.start();