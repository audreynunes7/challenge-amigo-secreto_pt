//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista = [];

function adicionarAmigo() {

    let input = document.querySelector('input');
    let valor = input.value.trim();

    if(valor == '') {
        alert('Informe um nome válido');
        return;
    }

    lista.push(valor);
    input.value = '';
    input.focus();

    renderizarLista();
}

function sortearAmigo() {
    if (lista.length <= 0){
        alert ('A lista está vazia.');
        return;
    } 
    let sorteio = Math.floor(Math.random() * lista.length);
    document.querySelector('#resultado').innerHTML = `O(a) amigo(a) secreto(a) é: ${lista[sorteio]}`;
    lista = []
    renderizarLista();
}

function renderizarLista() {

    var ul = document.querySelector('#listaAmigos');
    ul.innerHTML = '';

    lista.forEach(function(i){
        var li = document.createElement('li');
        li.innerHTML = i;
        ul.append(li);
    });
}