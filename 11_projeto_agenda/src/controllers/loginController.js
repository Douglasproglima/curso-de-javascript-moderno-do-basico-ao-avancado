exports.index = (req, res) => {
    res.render('login');
    return; //Garante que não irá utilizar nenhum middlare
};