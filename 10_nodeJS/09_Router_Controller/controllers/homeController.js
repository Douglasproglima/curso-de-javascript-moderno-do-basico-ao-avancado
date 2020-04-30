exports.startPage = (request, response) => {
    response.send(`
        <form action="/" method="POST">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name">
            <label for="name">Sobrenome</label>
            <input type="text" name="lastName" id="lastName">
            <button>Enviar</button>
        </form>
        `);
};

exports.validatePost = (request, response) => {
    response.send('Nova Rota');
};