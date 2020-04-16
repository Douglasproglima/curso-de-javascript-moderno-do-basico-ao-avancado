class User{
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    showUser(){
        console.log(this.userName, this.password);
    }
}

//A mesma coisa usando Factory Function
function User1(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User1.prototype.showUser = function(){
    console.log(this.userName, this.password);
}

const user = new User('douglasproglima', 'douglasproglima@gmail.com', '123456');
console.log(user);

const user1 = new User1('douglasproglima1', 'douglasprog1lima@gmail.com', '123456');
console.log(user1);
