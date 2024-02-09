const jwtDecode = require('jsonwebtoken');
const responseHelper = require('../customResponse/customIndex');
const config = require('../../config/environment');
const logger = require('../logger');
const log = new logger('MiddlewareController').getChildLogger();
/***************************************************************
 * SERVICE FOR HANDLING ADMIN AUTH TOKEN AUTHENTICATION
 **************************************************************/
module.exports = (req, res, next) => {
    /**
	 * Method to Authenticate Admin token
	 */
    let reqHeaders =req.get('Authorization');
    let responseData = {};
    try {
        let adminAuthToken = reqHeaders.split(' ')[1];
        log.info('Recived request for validating adminauth token', adminAuthToken);
        let decodeToken = jwtDecode.verify(adminAuthToken, config.adminJwtTokenInfo.secretKey);
        log.info('admin auth token extracted successfully with data:', decodeToken);
        req.admin = decodeToken;
        next();
    } catch (error) {
        log.error('failed to vaalidate admin auth token with error::', error);
        if (error.TokenExpiredError) {
            responseData.msg = 'token has been expired';
        } else {
            responseData.msg = 'Unauthorized request';
        }
        return responseHelper.unAuthorize(res,responseData);
    }
};