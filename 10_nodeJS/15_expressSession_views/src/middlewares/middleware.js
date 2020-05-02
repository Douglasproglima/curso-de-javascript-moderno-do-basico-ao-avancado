exports.middlewareGlobal = (request, response, next) => {
    next();
};

exports.middlewareSecond = (request, response, next) => {
    console.log('PASSOU NO MIDDLEWARE GLOBAL');
    console.log(`Passou no IF ${request.body.empresa}`);
    console.log();
    next();
}