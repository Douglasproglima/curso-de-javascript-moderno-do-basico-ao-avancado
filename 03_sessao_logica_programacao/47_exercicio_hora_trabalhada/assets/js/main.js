function contextClock(){
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = getTimerFromSeconds(seconds);
        }, 1000);
    }

    function getTimerFromSeconds(seconds){
        const data = new Date(seconds * 1000);
        const options = {
            hour12: false,
            timeZone: 'UTC'
        };

        return data.toLocaleTimeString('pt-BR', options);
    }

    document.addEventListener('click', function(event){
        const element = event.target;

        if(element.classList.contains('start')){
            clock.classList.remove('pause');
            clearInterval(timer); //Garante que não terá dois timers rodadando ao mesmo
            startClock();
        }

        if(element.classList.contains('stop')){
            clock.classList.add('pause');
            clearInterval(timer);
        }

        if(element.classList.contains('reload')){
            clock.classList.remove('pause');
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            seconds = 0;
        }
    });
}
contextClock();