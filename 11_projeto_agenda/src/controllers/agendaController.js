exports.index = (req, res) => {
    res.render('agenda');
};

exports.register = (req, res) => {
    res.send('Agenda Controller Register');
};