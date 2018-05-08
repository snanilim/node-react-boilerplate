var express = require('express');
var router = express.Router();

// Controllers
var userController = require('./userController');

// Request
router.post('/signup', userController.signupPost);
router.post('/login', userController.loginPost);
router.get('/login-per-user/:id', userController.loginPerUser);

router.put('/account', userController.ensureAuthenticated, userController.accountPut);
router.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
router.post('/forgot', userController.forgotPost);
router.post('/reset/:token', userController.resetPost);
router.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);

router.post('/auth/facebook', userController.authFacebook);
router.get('/auth/facebook/callback', userController.authFacebookCallback);
router.post('/auth/google', userController.authGoogle);
router.get('/auth/google/callback', userController.authGoogleCallback);


module.exports = router;

