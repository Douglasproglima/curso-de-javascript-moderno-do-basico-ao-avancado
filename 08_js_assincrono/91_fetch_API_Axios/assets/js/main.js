/* Sem o Axios
fetch('pessoas.json')
    .then(response => response.json())
    .then(json => openElementsOnPage(json));
*/

//Com o Axios
axios('pessoas.json')
    .then(response => openElementsOnPage(response.data));

function openElementsOnPage(json){
    const table = document.createElement('table');
    const trHeader = document.createElement('tr');
    trHeader.setAttribute('name', 'teste');
    trHeader.appendChild(table);

    for(let people of json){
        const tr = document.createElement('tr');
                
        let td = document.createElement('td');
        td.innerHTML = people.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = people.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = people.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const result = document.querySelector('.paragrafo-result');
    result.appendChild(table);
}