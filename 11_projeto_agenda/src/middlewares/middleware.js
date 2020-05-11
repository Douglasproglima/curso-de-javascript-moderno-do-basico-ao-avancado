exports.middlewareGlobal = (request, response, next) => {
    response.locals.errors = request.flash('errors'); 
    response.locals.success = request.flash('success'); 
    response.locals.user = request.session.user;
    next();
};

exports.loginRequiredMiddleware = (request, response, next) => {
    if(!request.session.user) {
        request.flash('errors', 'Necessário fazer login');
        request.session.save(() => response.redirect('/home'));
        return;
    }
    next();
};

exports.middlewareSecond = (request, response, next) => {
    next();
};

/* MIDDLEWARES CSURF E HEMELT */
exports.validateCsrfError = (err, request, response, next) => {
    if(err) return response.render('404'); //Criar uma página 404
    next();
};

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken  = request.csrfToken();
    next();
};