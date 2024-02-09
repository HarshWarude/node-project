'use strict';
/******************************************************************
 * EXPRESS ROUTING TO REDIRECT USER REQUEST TO THE GIVEN CONTROLLER
********************************************************************/
const adminRoutes = require('./Admin/admin.routes');
const userRoutes = require('./User/user.routes');
const responseHelper = require('../services/customResponse');
const exp = require('express');
const path = require('path');

module.exports = (app) => {
    app.set("view engine", "ejs");
    app.use(exp.static(path.join(__dirname, '../../public')));
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, PUT, PATCH, DELETE, OPTIONS'
        );
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Content-Type,Authorization,token'
        );
        next();
    });
    /**
* Handling the Default Route
*/
	/*app.get('/',(req,res) => {// eslint-disable-line
		let responseData = {};
		responseData.msg = 'UnAuthorized Access';
		return responseHelper.error(res,responseData);
	});*/

	/**
	* Handling Admin and User Routes with the defined path for usage
	*/
    app.use('/admin', adminRoutes(app));
    app.use('/api/v1', userRoutes(app));

    /**
	 * Handling Static Files
	 * */
	 
    app.get('/panel/*', function (req, res){
        res
            .status(200)
            .sendFile(path.join(__dirname, '../../public', 'panel','index.html'));
    });

    app.get('/fetch/', function(req,res){
        res
            .status(200)
            .sendFile(path.join(__dirname, '../../public', 'fetch', 'index.html'));
    });
    /**
 * Handling Undefined Routes {Put this route handler at the bottom}
 */
app.get('*',(req, res) => {// eslint-disable-line
    let responseData = {};
    responseData.msg = 'UnAuthorized Access';
    return responseHelper.error(res, responseData);
});
}