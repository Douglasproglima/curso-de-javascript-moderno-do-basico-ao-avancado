const contacts = [
    'Tadeu',
    'Zoana',
    'Douglas',
    'Lucas',
    'Felipe',
    'Taty',
    'Ruan',
    'Joaquim',
    'Maria'
];

const organizerByAlphabet = list => {
    list.reduce((prev, item) => {
        const firstLetter = item[0].toLocaleUpperCase();
        (prev[firstLetter]) ? prev[firstLetter].push(item) : prev[firstLetter] = [item];
        
        
        return prev;
    }, {});
};    
const sortFirstLetter = organizerByAlphabet(contacts);
console.log(sortFirstLetter);