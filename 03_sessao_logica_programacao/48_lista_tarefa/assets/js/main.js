function contextMain(){
    const inputTask = document.querySelector('.input-new-task');
    const btnTask = document.querySelector('.btn-add-task');
    const tasks = document.querySelector('.task');

    function createTask (textInput) {
        const li = createElementLi();
        li.innerText = textInput;
        tasks.appendChild(li);

        clearInput();
        createButtonClear(li);

        saveTaks();
    }

    const createElementLi = () => document.createElement('li');

    function clearInput(){
        inputTask.value = '';
        inputTask.focus();
    }

    function createButtonClear(element){
        element.innerText += ' '; 
        const buttonClear = document.createElement('button');
        buttonClear.innerText = 'Remover';
        buttonClear.setAttribute('class', 'btn-clear');
        buttonClear.setAttribute('title', 'Remover essa tarefa.');
        element.appendChild(buttonClear);

        /*
        const imgClear = document.createElement('img');
        imgClear.setAttribute('class', 'img-clear');
        imgClear.setAttribute('src', './assets/img/trash.png');
        buttonClear.appendChild(imgClear);
        */
    }

    function saveTaks(){
        const listTask = [];
        const elementLiTaks = tasks.querySelectorAll('li');
        for(let task of elementLiTaks){
            let valueTask = task.firstChild.nodeValue;
            listTask.push(valueTask);
        }

        const tasksJSON = JSON.stringify(listTask);
        localStorage.setItem('tasksWork', tasksJSON);
    }

    function getTaskSave(){
        const tasks = localStorage.getItem('tasksWork');
        const listTasks = JSON.parse(tasks);
        for(let task of listTasks)
            createTask(task);
    }
    getTaskSave();

    inputTask.addEventListener('keypress', function(e){
        if(e.keyCode == 13){
            if(!inputTask.value) return;
            createTask(inputTask.value);
        }
    });

    btnTask.addEventListener('click', function(){
        if(!inputTask.value) return;
        createTask(inputTask.value);
    });

    document.addEventListener('click', function(e){
        const element = e.target;

        if(element.classList.contains('btn-clear')){
            element.parentElement.remove();
            saveTaks();
        }
    });
}
contextMain();