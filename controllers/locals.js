//  Generic API response
module.exports.user = function(req, res, next) {
	res.locals.user = req.user
	return next()
}