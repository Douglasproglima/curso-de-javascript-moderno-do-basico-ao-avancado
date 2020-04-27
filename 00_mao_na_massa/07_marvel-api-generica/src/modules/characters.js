const axios = request('axios');
const utils = require('../modules/utils');

exports.characters = function() { 
    const routes = '/characters';

    axios(utils.createURL(routes))
        .then(request => console.log(request))
        .catch((e) => console.log(e));

    const container = document.querySelector('#marvel-row');
    console.log(container);
}

characters();