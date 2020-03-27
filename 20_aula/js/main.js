/*
1 - Criar os campos no HTML <input>:
  Nome, Sobrenome, peso e altura
2 - Botão Enviar
3 - Imprimir na página as informações preenchidas
4 - salvar em um array

Observação: A cada novo envio deve inserir dentro do array e mostrar abaixo do botão enviar
*/

function escope() {

  const form = document.querySelector('.form-person');
  const result = document.querySelector('.result');
  const peoples = [];

  function createPerson(name, lastName, weight, height){
      return {
        name,
        lastName,
        weight,
        height
      }
  }
  
  function getEventForm(event){
    event.preventDefault();
    
    const name = form.querySelector('.name-person');
    const lastName = form.querySelector('.last-name-person');
    const weight = form.querySelector('.weight-person');
    const height = form.querySelector('.height-person');
    const person = createPerson(name.value, lastName.value, weight.value, height.value);

    peoples.push(person);
    console.log(peoples);
    result.innerHTML += `<p><strong>Nome:</strong> ${name.value} | <strong>Sobrenome:</strong> ${lastName.value} | <strong>Peso:</strong> ${weight.value} | <strong>Altura:</strong> ${height.value}</p>`;
  }

  form.addEventListener('submit', getEventForm);
}
escope();