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