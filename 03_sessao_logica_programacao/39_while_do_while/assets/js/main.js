function contextMain(){
    const numberList = [];
    
    function genateNumberRadom(min, max, qtde){
        while (numberList.length < qtde){
            let numberRardom = Math.floor(Math.random() * (min, max) + min);

            if(numberList.indexOf(numberRardom) === -1) 
                numberList.push(numberRardom);
        }
    }

    function getNumberHadom(list){
        return list.join(',');
    }

    genateNumberRadom(0, 200, 100);
    console.log(getNumberHadom(numberList));
};
contextMain();
