//#region 
function contextPeoplesOne(){
    const peoples = {
        name: 'Douglas',
        lastName: 'Lima',
        old: 32,
        address:{
            street: 'Rua Juvenil das Flores',
            num: 1114 
        }
    }
    
    //Valor default variavel = 'valor de default caso a variavel de mesmo nome não exista dentro do objeto'
    //const {name = '', lastName = '', old = '', address: {street, num}} = peoples;
    const {name = '', lastName = '', ...restoDoObjeto} = peoples;
    console.log(name, lastName, restoDoObjeto);
}
contextPeoplesOne();