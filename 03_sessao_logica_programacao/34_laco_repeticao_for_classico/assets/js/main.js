//#region Exemplo da vida Real - API Breakingbad
function contextBreakingBad(){
    const characters = {
        0:{
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
        1:{
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
        2:{
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
    }

    for(const keys in characters){
        var char_id = characters[keys].char_id;
        var name = characters[keys].name;
        var nickname = characters[keys].nickname;
        var birthday = characters[keys].birthday;
        var imgUrl = characters[keys].img.url;
        var imgThumbemail = characters[keys].img.thumbmail;
        var status = characters[keys].status;
    
        console.log(imgThumbemail);
    }
}
//contextBreakingBad();
for (let index = 1; index <= 10; index++) {
    const isPar = index % 2 !== 0; //? 'Par' : 'Ímpar';

    if(isPar) console.log(`PAR: ${index}`);
    if(!isPar) console.log(`IMPAR: ${index}`);
}

//#5endregion