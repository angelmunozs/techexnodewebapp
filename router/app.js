//	Requirements
var controllers = require('../controllers')
var api 		= require('../api')

module.exports = function(app) {
	//	Autentication
	app.get('/', controllers.render('index'))
	//	Login
	app.get('/login', controllers.render('login'))
	//	Upload a song
	app.get('/upload', controllers.auth.require.user, controllers.render('sections/upload'))
	//	See events
	app.get('/events', controllers.auth.require.user, controllers.render('sections/events'))
}