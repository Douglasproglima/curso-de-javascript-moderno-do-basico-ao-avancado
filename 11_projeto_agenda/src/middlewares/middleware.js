exports.middlewareGlobal = (request, response, next) => {
    response.locals.varLocalMiddleware = 'Este é o vlr da variável local do Middleware'; 
    next();
};

exports.middlewareSecond = (request, response, next) => {
    console.log('PASSOU NO MIDDLEWARE GLOBAL');
    console.log(`Passou no IF ${request.body.empresa}`);
    console.log();
    next();
}

/* MIDDLEWARES CSURF E HEMELT */
exports.validateCsrfError = (err, request, response, next) => {
    if(err) {
        return response.render('404'); //Criar uma página 404
    }
    next();
}

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken  = request.csrfToken();
    next();
};