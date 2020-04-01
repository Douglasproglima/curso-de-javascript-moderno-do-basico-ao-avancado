const api = {
    render: () => {
        const form = document.querySelector('.form-character');
        //const result = document.querySelector('.result');
        const container = form.querySelector('.card');
        let contentHTML = '';

        const URL = 'https://www.breakingbadapi.com/api/characters';

        fetch(URL)
        .then(res => res.json())
        .then((characters) => {
            for(const character of characters){
                const name = character.name;
                const nickName = character.nickname;
                const birthday = character.birthday;
                const img = character.img;

                contentHTML += `
                    <div class="col-md-4">
                        <h3 class="title">${name}</h3>
                        <a href="${ '' }" target="_blank">
                        <img src="${img}" alt="${nickName}" class="img-thumbnail" >
                        </a>
                    </div>`;
                //result.innerHTML += `${name}</br>`;
            }

            console.log(characters);
            container.innerHTML = contentHTML;
        })
    }
}

api.render();
