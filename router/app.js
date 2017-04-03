//	Requirements
var controllers = require('../controllers')
var api 		= require('../api')

module.exports = function(app) {
	//	Autentication
	app.get('/', controllers.render('index'))
	//	Login
	app.get('/login', controllers.render('login'))
	//	Upload a song
	app.get('/play', controllers.auth.require.user, controllers.render('sections/playsong'))
	//	See events
	app.get('/events', controllers.auth.require.user, controllers.render('sections/events'))
}