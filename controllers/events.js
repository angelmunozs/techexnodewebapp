module.exports.receive = function(req, res, next) {
	var a = req.body;
	console.log(a);
	return next();
}