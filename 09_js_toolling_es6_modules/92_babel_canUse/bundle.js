class People {
  constructor(name, age, birthday) {
    this.name = name;
    this.age = age;
    this.birthday = birthday;
  }

}

const dogao = new People('Dog', 25, '01/01/2009');
console.log(dogao.name, dogao.birthday);
console.log(''); //npm install --save-dev @babel/cli@7.6.4 @babel/preset-env@7.6.3 @babel/core@7.6.4 
//npx babel ./assets/js/main.js -o bundle.js --presets=@babel/env
//babel ./assets/js/main.js -o ./bundle.js --presets=@babel/env -w
