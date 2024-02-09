/***************************
 * ROUTE CONTROLLER METHODS
 ***************************/
/**
 * All User Controller
 */
const userAuthController = require('./userController/auth/userAuth');
const userInfoController = require('./userController/users/userIndex');

/**
 * All Admin Controller
 */
const adminAuthController = require('./adminController/auth/adminAuth');

module.exports = {
    /**
 * All Admin Controller
 */
    adminAuth: adminAuthController,
    /**
     * All User Controller
     */
    userAuth: userAuthController,
    userInfo: userInfoController,
};