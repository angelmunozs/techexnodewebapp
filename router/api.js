//	Requirements
var controllers = require('../controllers')
var api 		= require('../api')

module.exports = function(app) {
	//	Autenticación
	app.post('/api/login', controllers.auth.login, controllers.locals.user, api.common.generic)
	app.post('/api/logout', controllers.auth.logout, api.common.generic)
	app.get('/api/user', api.users.info)
	//	Usuario
	app.post('/api/user', controllers.users.create, api.common.generic)
	//	Played song
	app.post('/api/events', controllers.events.receive, api.common.generic)
}