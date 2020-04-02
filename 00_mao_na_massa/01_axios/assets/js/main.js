//#region Exemplo da vida Real - API Breakingbad
function contextBreakingBad(){
    const characters = [
        {
            char_id: 1,
            name: "Walter White",
            birthday: "09-07-1958",
            occupation: {
                0: "High School Chemistry Teacher",
                1: "Meth King Pin"
            },
            img: {
                url: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
                thumbmail: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg'
            },
            status: "Presumed dead",
            nickname: "Heisenberg"
        },
        {
            char_id: 1,
            name: "Jesse Pinkman",
            birthday: "09-24-1984",
            occupation: {
                0: "High School Chemistry Teacher",
                1: "Meth King Pin"
            },
            img: {
                url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg',
                thumbmail: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg'
            },
            status: "Alive",
            nickname: "Cap n' Cook"
        },
        {
            char_id: 2,
            name: "Skyler White",
            birthday: "08-11-1970",
            occupation: {
                0: "High School Chemistry Teacher",
                1: "Meth King Pin"
            },
            img: {
                url: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
                thumbmail: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg'
            },
            status: "Alive",
            nickname: "Sky"
        }
    ]

    const container = document.querySelector('.container');
    for(const keys in characters){
        const char_id = characters[keys].char_id;
        const name = characters[keys].name;
        const nickname = characters[keys].nickname;
        const birthday = characters[keys].birthday;
        const imgUrl = characters[keys].img.url;
        const imgThumbemail = characters[keys].img.thumbmail;
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
