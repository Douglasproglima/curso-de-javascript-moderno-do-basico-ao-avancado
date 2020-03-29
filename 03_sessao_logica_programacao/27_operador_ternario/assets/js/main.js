// condicao ? vlr1 : vlr2;

const userPoint = 500;
const userNivel = userPoint >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(userNivel);

if(userPoint >= 1000)
    console.log('IF - Usuário VIP');
else
    console.log('IF - Usuário normal');

    const userColor = null;
    const defaultColor = userColor || 'Black';
    console.log(userNivel, defaultColor);