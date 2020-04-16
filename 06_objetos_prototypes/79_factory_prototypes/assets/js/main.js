//FORMA ACOPLADA
/*
function user(userName, email, password){
    //Funções acopladas ao objeto
    const userPrototype = {
        select(){
            console.log(this.userName, this.email);
        },
        save(){
            console.log('Salvou');
        },
        update(){
            console.log('Alterou');
        },
        remove(){
            console.log('Deletou');
        }
    };

    return Object.create(userPrototype, {
        userName: {value: userName},
        email: {value: email},
        password: {value: password}
    });
}

const admin = user('douglasproglima', 'douglasproglima@gmail.com', '123456');
console.log(admin);
*/

//Abaixo o Mixing
const select = {
    select(){
        console.log(this.userName, this.email);
    }
};

const save = {
    save(){
        console.log('Salvou');
    }
};

const update = {
    update(){
        console.log('Alterou');
    }
};

const remove = {
    remove(){
        console.log('Deletou');
    }
};

//const userPrototype = Object.assign({}, select, save, update, remove);
//A mesma coisa com o ...spread
const userPrototype = {...select, ...save, ...update, ...remove};
//Factory Function
function user(userName, email, password){
    return Object.create(userPrototype, {
        userName: {value: userName},
        email: {value: email},
        password: {value: password}
    });
}

const admin = user('douglasproglima', 'douglasproglima@gmail.com', '123456');
console.log(admin);