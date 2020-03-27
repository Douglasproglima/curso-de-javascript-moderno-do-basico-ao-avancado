function createPerson(name, lastName, old){
    /* 
    return {
            name:name,
            lastName:lastName,
            old:old
        }    
    */
    
    return {
        name,
        lastName,
        old
    }
}

const pessoa1 = createPerson('Douglas', 'Lima', 32);
const pessoa2 = createPerson('Rafalea', 'Lima', 23);
console.log(pessoa1, pessoa2);


const person = {
    name: 'Lucas',
    lastName: 'Lima',
    old: 23,

    talk(){console.log(`A idade do ${this.name} ${this.lastName} é ${this.old} de idade.`);},
    incrementOld(){++this.old;}
}

person.talk();
person.incrementOld();
console.log('------------');
person.talk();
person.incrementOld();