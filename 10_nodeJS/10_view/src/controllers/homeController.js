exports.startPage = (request, response) => {
    response.render('index');
};

exports.validatePost = (request, response) => {
    response.send('Nova Rota');
};