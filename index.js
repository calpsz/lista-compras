import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

/*linkando a parte do html que queremos mexer*/
const listaDeCompras = document.getElementById("lista-de-compras")

/*pegando o botão adicionar pra podermos fazer uma ação a partir dele*/
const botaoAdicionar = document.getElementById("adicionar-item")


/*adiciona um fofoqueiro, no caso, ele tá de olho quando há um clique no botão*/
/*isso tudo aqui é pra adicionar um item quando clicar no botao*/
botaoAdicionar.addEventListener("click", (evento) => {
    /*isso previne experiencias ruins com o coiso tornando pro default, mt utilizado em forms pra ele não ser resetado quando clicado no botão enviar*/
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();

    /*colocando o item da lista dentro da lista de compras*/
    listaDeCompras.appendChild(itemDaLista)

    verificarListaVazia();
})

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");

    if(itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

verificarListaVazia();