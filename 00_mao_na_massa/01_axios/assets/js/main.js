const url = 'https://www.breakingbadapi.com/api/characters?limit=50&offset=50';
axios(url)
    .then(response => response.data)
    .then(characters => contextBreakingBad(characters))
    .catch(e)

function contextBreakingBad(characters){
    console.log(characters.length);
    if(characters.status === 429) new Error('Limite diário de consulta API atingido. Volte amanhã meu jovem.');

    const container = document.querySelector('.container');
    
    characters.sort();
    characters.reverse();

    for(const keys in characters){
        console.log(characters[keys]);
        const name = characters[keys].name;
        const nickname = characters[keys].nickname;
        const birthday = characters[keys].birthday;
        const imgUrl = characters[keys].img;
        //const imgThumbemail = characters[keys].img.thumbmail;
        const status = characters[keys].status;
    
        const hr1 = document.createElement('hr');
        container.appendChild(hr1);
        const h3 = document.createElement('h3');
        container.appendChild(h3);
        h3.innerHTML = name;
        const hr2 = document.createElement('hr');
        h3.appendChild(hr2);

        const divCard = document.createElement('div');
        container.appendChild(divCard);
        divCard.classList.add('card');

        const divCardImgContainer = document.createElement('div');
        divCard.appendChild(divCardImgContainer);
        divCardImgContainer.classList.add('card__image_container');
    
        const img = document.createElement('img');
        divCardImgContainer.appendChild(img);
        img.classList.add('card_image');
        img.setAttribute('alt', 'Avatar');
        img.setAttribute('src', imgUrl);
    }
}
contextBreakingBad();
