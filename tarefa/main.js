//Seleciona o form
const form = document.querySelector('.form');

//Seleciona o campo de entrada da tarefa
const input = document.getElementById('input');

//Seleciona a lista de tarefas
const lista = document.getElementById('lista');

//Cria um array vazio para armazenar as tarefas
let todas = []; //todas as tarefas

//Função para mostrar as tarefas da lista
function listarTarefas() {
    lista.innerHTML = ''

    //Loop para as tarefas, mede o array de quantos elementos tem na lista
    for(let i = 0; i < todas.length; i++) {
        const toda = todas[i]

        //Cria um elemento de lista, de texto e um botão para cada tarefa
        const li = document.createElement('li')
        const span = document.createElement('span')
        const button = document.createElement('button')

        //Define o texto da tarefa no elemento span
        span.innerHTML = toda;

        //Deefine o texto do botão de exclusão e adiciona o ouvinte de eventos para remover a tarefa do array e listar novamente
        button.innerHTML = 'Excluir'
        button.addEventListener('click', function(){
            todas.splice(i, 1);
            listarTarefas();
        });

        //Adiciona o elemento span e button ao elemento lista
        li.appendChild(span);
        li.appendChild(button);

        //Adiciona o elemento li na lista de tarefas (ul)
        lista.appendChild(li)
    }
}

//Adiciona um ouvinte de eventos ao formulario para detectar quando o usuario clicar no botão
form.addEventListener('submit', function(event) {
    event.preventDefault()

    //Obtem o texto da tarefa e remove espaços extras
    const texto = input.value.trim();

    if (texto.length === 0) {
        //Se tentar criar a tarefa sem ter escrito nada, ele não vai criar uma tarefa
        return;
    }

    //Adiciona a nova tarefa no Array e limpa o input da lista
    todas.push(texto);
    input.value = ''
    listarTarefas();
})
//Carrega a lista de tarefas quando a página é carregada
listarTarefas;