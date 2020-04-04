const getTimeNow = () => {
    let data = new Date();
    const options = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    return data.toLocaleTimeString('pt-BR', options);
}

const timeNow = setInterval(function(){ console.log(getTimeNow())}, 1000);

setTimeout(function(){clearInterval(timeNow)}, 5000); //Executa apenas uma unica vez