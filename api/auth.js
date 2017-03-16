//  Requirements
var api = require('../api')
var errores = require('../tools/errores')

//  Authentication Requirements
module.exports.require = {
    user : function(req, res, next) {
        if(req.user) {
            return next()
        }
        return res.api.error(Errores.ACCESO_DENEGADO)
    },
    admin : function(req, res, next) {
        if(req.user && req.user.groups.indexOf('admin') != -1) {
            return next()
        }
        return res.api.error(Errores.ACCESO_DENEGADO)
    },
    not_logged : function(req, res, next) {
        if(!req.user) {
            return next()
        }
        return res.api.error(Errores.USUARIO_LOGEADO)
    }
}