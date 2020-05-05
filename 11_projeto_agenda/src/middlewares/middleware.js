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
    if(err && err.code === 'EBADCSRFTOKEN') {
        return response.render('../views/404/index'); //Criar uma página 404
    }
}

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken  = request.csrfToken();
    next();
};